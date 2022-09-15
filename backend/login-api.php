<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $input = $data->input;
    $password = $data->password;

    $stmt = $mysqli->prepare("SELECT u.password FROM users u, email_users e, phone_users p WHERE u.user_id=e.user_id AND u.user_id=p.user_id AND e.user_id=p.user_id AND (u.username=? OR e.email=? OR p.phone=?);");
    $stmt->bind_param("sss", $input, $input, $input);
    if(!$stmt->execute()) {
        die("ERROR in login stmt");
    }
    $response = [];
    $results = $stmt->get_result();
    while($result = $results->fetch_assoc()) {
        $response[] = $result;
        break;
    }
    if(count($response) == 0) {
        $response = ["verified" => false, "found" => false];
    }else {
        $hashedPassword = $response['password'];
        $checkedPassword = password_verify($password, $hashedPassword);

        if($checkedPassword) {
            $response = ["verified" => true];
        }else {
            $response = ["verified" => false, "correctPwd" => false];
        }
    }

    echo json_encode($response);
    
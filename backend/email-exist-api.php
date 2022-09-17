<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;

    $stmt = $mysqli->prepare("SELECT email from email_users WHERE email=?");
    $stmt->bind_param("s", $email);
    if(!$stmt->execute()) {
        die("email Execution Failed");
    }
    $response = [];
    $results = $stmt->get_result();
    while($result = $results->fetch_assoc()) {
        $response[] = $result;
    }
    if(count($response) <= 0) {
        echo json_encode(['emailExist' => false]);
    }else {
        echo json_encode(["emailExist" => true]);
    }
        
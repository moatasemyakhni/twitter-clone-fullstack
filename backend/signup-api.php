<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $username = $data->username;
    $email = $data->email;
    $phone = $data->phone;
    $password = $data->password;
    $profilePhoto = $data->profilePhoto;

    $stmt1 = $mysqli->prepare("INSERT INTO users(name, username, password, profile_photo) VALUES(?, ?, ?, ?);");
    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
    $stmt1->bind_param("ssss", $name, $username, $hashedPwd, $profilePhoto);

    $response = [];
    if($stmt1->execute()) {
        $response[] = ["insert in users success" => true];
    }else {
        $response[] = ["insert in users success" => false];
    }

    // username is unique
    $stmt2 = $mysqli->prepare("SELECT user_id from users WHERE username=?");
    $stmt2->bind_param("s", $username);
    if(!$stmt2->execute()) {
        die("Search Execution Failed");
    }
    $results = $stmt2->get_result();
    $result = $results->fetch_assoc();
    $userID = $result['user_id'];
    
    $stmt3 = $mysqli->prepare("INSERT INTO email_users VALUES(?, ?);");
    $stmt3->bind_param("ds", $userID, $email);
    if($stmt3->execute()) {
        $response[] = ["insert in users email success" => true];
    }else {
        $response[] = ["insert in users email success" => false];
    }

    $stmt4 = $mysqli->prepare("INSERT INTO phone_users VALUES(?, ?);");
    $stmt4->bind_param("ds", $userID, $phone);
    if($stmt4->execute()) {
        $response[] = ["insert in users phone success" => true];
    }else {
        $response[] = ["insert in users phone success" => false];
    }

    echo json_encode($response);
<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $username = $data->username;
    $email = $data->email;
    $profilePhoto = $data->profilePhoto;

    $stmt = $mysqli->prepare("INSERT INTO users(name, username, email, profile_photo) VALUES(?, ?, ?, ?);");
    $stmt->bind_param("ssss", $name, $username, $email, $profilePhoto);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
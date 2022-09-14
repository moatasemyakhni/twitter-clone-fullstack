<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $email = $data->email;
    $name = $data->name;
    $username = $data->username;
    $password = $data->password;
    $profilePhoto = $data->profilePhoto;

    $stmt = $mysqli->prepare("INSERT INTO users(name, username, email, profile_photo) VALUES(?, ?, ?, ?);");
    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
    $stmt->bind_param("sssss", $email, $name, $username, $hashedPwd, $profilePhoto);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
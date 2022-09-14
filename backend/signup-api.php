<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    $username = $data->username;
    $email = $data->email;
    $password = $data->password;
    $profilePhoto = $data->profilePhoto;

    $stmt = $mysqli->prepare("INSERT INTO users(name, username, email, password, profile_photo) VALUES(?, ?, ?, ?, ?);");
    $hashedPwd = password_hash($password, PASSWORD_DEFAULT);
    $stmt->bind_param("sssss", $name, $username, $email, $hashedPwd, $profilePhoto);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
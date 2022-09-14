<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $content = $data->content;
    $username = $data->username;
    $postPhoto = $data->postPhoto;
    $userID = $data->userID;

    $stmt = $mysqli->prepare("INSERT INTO posts(content, username, photo, user_id) VALUES(?, ?, ?, ?);");
    $stmt->bind_param("sssd", $content, $username, $postPhoto, $userID);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
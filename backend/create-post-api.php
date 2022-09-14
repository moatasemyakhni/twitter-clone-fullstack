<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $content = $data->content;
    $postPhoto = $data->postPhoto;

    $stmt = $mysqli->prepare("INSERT INTO posts(user_id, content, photo) VALUES(?, ?, ?);");
    $stmt->bind_param("dss", $userID, $content, $postPhoto);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
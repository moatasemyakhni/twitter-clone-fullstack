<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $content = $data->content;

    $stmt = $mysqli->prepare("INSERT INTO posts(user_id, content) VALUES(?, ?);");
    $stmt->bind_param("ds", $userID, $content);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
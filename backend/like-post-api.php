<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $postID = $data->postID;

    $stmt = $mysqli->prepare("INSERT INTO post_likes VALUES(?, ?);");
    $stmt->bind_param("dd", $userID, $postID);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
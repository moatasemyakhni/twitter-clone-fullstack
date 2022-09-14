<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $postID = $data->postID;

    $stmt = $mysqli->prepare("DELETE FROM post_likes WHERE user_id=? AND post_id=?");
    $stmt->bind_param("dd", $userID, $postID);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
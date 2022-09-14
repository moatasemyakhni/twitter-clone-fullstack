<?php
    include('connection.php');
    $data = json_decode(file_get_contents('php://input'));
    $postID = $data->postID;
    $photo = $data->photo;

    $stmt = $mysqli->prepare("INSERT INTO post_photos VALUES(?, ?);");
    $stmt->bind_param("ds", $postID, $photo);
    if($stmt->execute()) {
        echo json_encode(["success"=> true]);
    }else {
        echo json_encode(["success" => false]);
    }
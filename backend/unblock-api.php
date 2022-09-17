<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $friendID = $data->friendID;

    $stmt = $mysqli->prepare("DELETE FROM user_blocks WHERE user_id=? AND friend_id=?");
    $stmt->bind_param("dd", $userID, $friendID);

    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $blockedID = $data->blockedID;

    $stmt1 = $mysqli->prepare("DELETE FROM user_followers WHERE user_id=? AND friend_id=?");
    $stmt1->bind_param("dd", $userID, $blockedID);

    $stmt2 = $mysqli->prepare("DELETE FROM user_followers WHERE user_id=? AND friend_id=?");
    $stmt2->bind_param("dd", $blockedID, $userID);

    $stmt3 = $mysqli->prepare('INSERT INTO user_blocks VALUES(?, ?);');
    $stmt3->bind_param("dd", $userID, $blockedID);

    if($stmt1->execute() && $stmt2->execute() && $stmt3->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
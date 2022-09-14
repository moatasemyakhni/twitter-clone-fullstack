<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $friendID = $data->friendID;

    $stmt1 = $mysqli->prepare("DELETE FROM user_followers WHERE user_id=? AND friend_id=?");
    $stmt1->bind_param("dd", $userID, $friendID);

    $stmt2 = $mysqli->prepare("DELETE FROM user_followers WHERE user_id=? AND friend_id=?");
    $stmt2->bind_param("dd", $friendID, $userID);

    if($stmt1->execute() && $stmt2->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
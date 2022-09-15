<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $friendID = $data->friendID;

    $stmt = $mysqli->prepare("INSERT INTO user_followers VALUES(?, ?);");
    $stmt->bind_param("dd", $friendID, $userID);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => false]);
    }
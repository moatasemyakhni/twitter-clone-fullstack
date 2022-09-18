<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $friendID = $data->friendID;

    $stmt = $mysqli->prepare("SELECT * FROM user_blocks WHERE user_id=? AND blocked_id=?");
    $stmt->bind_param("dd", $userID, $friendID);
    if(!$stmt->execute()) {
        die("Error in isBlocked");
    }
    $results = $stmt->get_result();
    $response = [];
    while($result = $results->fetch_assoc()) {
        $response[] = $result;
    }


    if(count($response) == 0) {
        echo json_encode(["blocked" => false]);
    }else {
        echo json_encode(["blocked" => true]);
    }
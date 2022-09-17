<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;

    $stmt = $mysqli->prepare("SELECT blocked_id from user_blocks WHERE user_id=?");
        $stmt->bind_param("d", $userID);
        if(!$stmt->execute()) {
            die("Block Select Execution Failed");
        }
        $response = [];
        $results = $stmt->get_result();
        while($result = $results->fetch_assoc()) {
            $stmt2 = $mysqli->prepare("SELECT name, username FROM users WHERE user_id=?");
            $stmt2->bind_param("d", $result['blocked_id']);
            if(!$stmt2->execute()) {
               die("select problem");
            }
            $data = $stmt2->get_result();
            while($res = $data->fetch_assoc()) {
               $response[] = $res;
            }
        }
        
        echo json_encode($response);

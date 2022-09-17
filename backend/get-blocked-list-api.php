<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;

    $stmt = $mysqli->prepare("SELECT u.name, u.username from users u, user_blocks b WHERE u.user_id=b.user_id AND u.user_id=?");
        $stmt->bind_param("d", $userID);
        if(!$stmt->execute()) {
            die("Block Select Execution Failed");
        }
        $response = [];
        $results = $stmt->get_result();
        while($result = $results->fetch_assoc()) {
            $response[] = $result;
        }
        
        echo json_encode($response);
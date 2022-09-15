<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;

    $stmt = $mysqli->prepare("SELECT phone from phone_users WHERE user_id=?");
        $stmt->bind_param("d", $userID);
        if(!$stmt->execute()) {
            die("Phone Execution Failed");
        }
        $results = $stmt->get_result();
        $result = $results->fetch_assoc();
        $phone = $result['phone'];
        
        echo json_encode(['phone' => $phone]);
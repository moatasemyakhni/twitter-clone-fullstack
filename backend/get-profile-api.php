<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;

    $stmt = $mysqli->prepare("SELECT profile_photo from users WHERE user_id=?");
        $stmt->bind_param("d", $userID);
        if(!$stmt->execute()) {
            die("profile_photo Execution Failed");
        }
        $results = $stmt->get_result();
        $result = $results->fetch_assoc();
        $url = $result['profile_photo'];
        
        echo json_encode(['url' => $url]);
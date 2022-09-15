<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;

    $stmt = $mysqli->prepare("SELECT email from email_users WHERE user_id=?");
        $stmt->bind_param("d", $userID);
        if(!$stmt->execute()) {
            die("Email Execution Failed");
        }
        $results = $stmt->get_result();
        $result = $results->fetch_assoc();
        $email = $result['email'];
        
        echo json_encode(['email' => $email]);
<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;

    $stmt = $mysqli->prepare("SELECT u2.* FROM users u1, users u2 WHERE NOT EXISTS(SELECT ? FROM user_followers f WHERE f.user_id=u1.user_id AND f.friend_id=u2.user_id) AND NOT EXISTS(SELECT ? FROM user_followers f WHERE f.user_id=u2.user_id AND f.friend_id=u1.user_id) AND u1.user_id!=u2.user_id AND u1.user_id=?;");
    $stmt->bind_param("ddd", $userID, $userID, $userID);
    if(!$stmt->execute()) {
        die("who to follow Execution Failed");
    }
    $results = $stmt->get_result();
    $response = [];
    while($result = $results->fetch_assoc()) {
        $response[] = $result;
    }
    
    echo json_encode($response);
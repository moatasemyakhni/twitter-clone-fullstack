<?php
    include('connection.php');
    $data = json_decode(file_get_contents('php://input'));
    $userID = $data->userID;
    $profilePhoto = $data->profilePhoto;

    $stmt = $mysqli->prepare("UPDATE users SET profile_photo=? WHERE user_id=?;");
    $stmt->bind_param("sd", $profilePhoto, $userID);
    if(!$stmt->execute()) {
        echo json_encode(["success" => false]);
    }else {
        echo json_encode(["success" => true]);
    }

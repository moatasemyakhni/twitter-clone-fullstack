<?php
    include('connection.php');
    $data = json_decode(file_get_contents('php://input'));
    $userID = $data->userID;
    $username = $data->username;//for naming purposes
    $profilePhoto = $data->profilePhoto;

    //$profilePhoto is in base 64
    $data = explode(',', $profilePhoto);// to get the ext
    $ext = explode(';', explode('/', $data[0])[1])[0];
    $user = $username . "_" . time(); //unique it
    $path = "D:\\php\\htdocs\\9-sefactory\\twitter-clone-fullstack\\frontend\\assets\\images\\usersProfiles\\";
    $completeUrl = $path . $user . "." . $ext;
    
    //Actually saving the photo in the previous path
    file_put_contents($completeUrl, file_get_contents($profilePhoto));


    $stmt = $mysqli->prepare("UPDATE users SET profile_photo=? WHERE user_id=?;");
    $stmt->bind_param("sd", $completeUrl, $userID);
    if(!$stmt->execute()) {
        echo json_encode(["success" => false]);
    }else {
        echo json_encode(["success" => true, "url" => $completeUrl]);
    }

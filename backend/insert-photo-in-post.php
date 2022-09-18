<?php
    include('connection.php');
    $data = json_decode(file_get_contents('php://input'));
    $postID = $data->postID;
    $photo = $data->photo;
    
    //$photo is in base 64
    $data = explode(',', $photo);// to get the ext
    $ext = explode(';', explode('/', $data[0])[1])[0];
    $user = $username . "_" . time(); //unique it
    $path = "D:\\php\\htdocs\\9-sefactory\\twitter-clone-fullstack\\frontend\\assets\\images\\usersPosts\\";
    $completeUrl = $path . $user . "." . $ext;

    //Actually saving the photo in the previous path
    file_put_contents($path, file_get_contents($photo));

    $stmt = $mysqli->prepare("INSERT INTO post_photos VALUES(?, ?);");
    $stmt->bind_param("ds", $postID, $completeUrl);
    if($stmt->execute()) {
        echo json_encode(["success" => true]);
    }else {
        echo json_encode(["success" => true, "url" => $completeUrl]);
    }
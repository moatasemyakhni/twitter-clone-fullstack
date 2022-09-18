<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $userID = $data->userID;
    $content = $data->content;

    $stmt = $mysqli->prepare("INSERT INTO posts(user_id, content) VALUES(?, ?);");
    $stmt->bind_param("ds", $userID, $content);
    if(!$stmt->execute()) {
        // echo json_encode(["success" => true]);
        die("Error in create post");
    }
    //grab the current post id
    $query = $mysqli->prepare("SELECT max(post_id) as recent_post FROM posts");
    if(!$query->execute()) {
        die("Error in create post id selection");
    }
    $results = $query->get_result();
    $result = $results->fetch_assoc();
    $postID = $result['recent_post'];

    echo json_encode(["success" => true, "postID" => $postID]);
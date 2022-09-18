<?php
include('connection.php');
$data = json_decode(file_get_contents("php://input"));
$userID = $data->userID;


$stmt = $mysqli->prepare(" SELECT posts.content, post_photos.photo, users.name, users.username, users.profile_photo FROM `posts` INNER JOIN users ON posts.user_id = users.user_id INNER JOIN post_photos ON posts.post_id = post_photos.post_id WHERE posts.user_id NOT LIKE (?);");
$stmt->bind_param("d", $userID);
if(!$stmt->execute()) {
    // echo json_encode(["success" => true]);
    die("Error in create post");
}

$results = $stmt->get_result();
$response = [];
while($result = $results->fetch_assoc()) {
    $response[] = $result;
}

echo json_encode($response);
     ?>

<?php
include('connection.php');
$data = json_decode(file_get_contents('php://input'));

$userID = $data->userID;
$name = $data->name;

$query = $mysqli->prepare("UPDATE users SET name=? WHERE user_id=?;");
$query->bind_param("sd", $name, $userID);
if(!$query->execute()) {
    echo json_encode(["success" => false]);
}else {
    echo json_encode(["success" => true, "url" => $name]);
}

 ?>

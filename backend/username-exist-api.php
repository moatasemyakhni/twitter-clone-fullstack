<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;

    $stmt = $mysqli->prepare("SELECT username from users WHERE username=?");
    $stmt->bind_param("s", $username);
    if(!$stmt->execute()) {
        die("username Execution Failed");
    }
    $response = [];
    $results = $stmt->get_result();
    while($result = $results->fetch_assoc()) {
        $response[] = $result;
    }
    if(count($response) <= 0) {
        echo json_encode(['usernameExist' => false]);
    }else {
        echo json_encode(["usernameExist" => true]);
    }
        
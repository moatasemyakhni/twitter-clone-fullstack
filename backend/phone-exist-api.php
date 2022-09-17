<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $phone = $data->phone;

    $stmt = $mysqli->prepare("SELECT phone from phone_users WHERE phone=?");
    $stmt->bind_param("s", $phone);
    if(!$stmt->execute()) {
        die("phone Execution Failed");
    }
    $response = [];
    $results = $stmt->get_result();
    while($result = $results->fetch_assoc()) {
        $response[] = $result;
    }
    if(count($response) <= 0) {
        echo json_encode(['phoneExist' => false]);
    }else {
        echo json_encode(["phoneExist" => true]);
    }
        
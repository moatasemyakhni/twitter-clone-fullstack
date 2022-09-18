<?php
    include('connection.php');
    $data = json_decode(file_get_contents("php://input"));
    $nameUsername = $data->nameUsername;

    $stmt = $mysqli->prepare("SELECT * FROM users WHERE name LIKE concat('%', ?, '%') OR username LIKE concat('%', ?, '%') LIMIT 5;");
    $stmt->bind_param("ss", $nameUsername, $nameUsername);
    if(!$stmt->execute()) {
        die("Search Execution Failed");
    }
    $results = $stmt->get_result();
    $response = [];
    while($result = $results->fetch_assoc()) {
        $response[] = $result;
    }
    
    echo json_encode($response);
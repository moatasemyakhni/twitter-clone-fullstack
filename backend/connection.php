<?php
    $host = "localhost";
    $username = "root";
    $pwd = null;
    $dbName = "twitterdb";

    $mysqli = new mysqli($host, $username, $pwd, $dbName);

    if($mysqli->connect_error) {
        die("Connection failed: " . $mysqli->connect_error);
    }
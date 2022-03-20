<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "rddb.chl55zwgoe4a.us-east-1.rds.amazonaws.com";
$username = "admin";
$password = "us-east-1.console";
$dbname = "tetstdb";

// Create connection
$link = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($link,"utf8");
?>
<?php 
include "connection.php";

 $data = [ // recieving data from form of start page
    'name' => $_POST['name'],
    'email' => $_POST['email'],
];

$sql = "INSERT INTO user (name, email) VALUES (:name, :email)";// insert statement
$stmt= $connection->prepare($sql); // preparing insert statement
$stmt->execute($data); // executing statement with the data from post
session_start(); // starting session

$_SESSION['name'] = $_POST['name']; // using session to remeber wich user is playing
header("location: game.php"); // redirect to game
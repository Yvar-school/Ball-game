<?php 
include "connection.php";

 $data = [
    'name' => $_POST['name'],
    'email' => $_POST['email'],
];

$sql = "INSERT INTO user (name, email) VALUES (:name, :email)";
$stmt= $connection->prepare($sql);
$stmt->execute($data);
session_start();

$_SESSION['name'] = $_POST['name'];
header("location: game.php");
<?php
include 'connection.php';

$names = $_COOKIE['ncookie'];
$points = $_COOKIE['scookie'];

$scoren = [
    'name' => $names,
];


$score = "select points from user where name=:name";

$select = $connection->prepare($score);
$result = $select->execute($scoren);


$punten =$select->fetch()['points'];

$totaal = $punten + $points;

$statement = "update user set points=:points where name=:name";

$data = [
    'name' => $names,
    'points' => $totaal,
];
$update = $connection->prepare($statement);

$update->execute($data);
header('Location: ./game.php');
?>
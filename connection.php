<?php 
try
{
    $connection = new PDO('mysql:host=localhost;dbname=users', 'root', '');
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(Exception $e){
    die('oops');
}

$alles = $connection->query('select * from user where id =16');
<?php 
/*
*   new database connectiong
*
*/
try
{
    $connection = new PDO('mysql:host=localhost;dbname=users', 'root', ''); // Establishing new database connection
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // allowing errors to be seen and caught
} catch(Exception $e){
    die('oops');
}

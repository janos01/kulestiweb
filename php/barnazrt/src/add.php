<?php

$nev = $_GET['nev'];
$tel = $_GET['tel'];
$fiz = $_GET['fiz'];

echo $nev." ".$tel." ".$fiz;

$conn = mysqli_connect('localhost',
    'barnazrt', '12345', 'barnazrt');

if(!$conn) {
    error_log("Hiba! A kapcsolódás sikertelen!");
}

mysqli_set_charset($conn, "utf-8");

$sql = "insert into dolgozok";
$res = mysqli_query($conn, $sql);

mysqli_close($conn);

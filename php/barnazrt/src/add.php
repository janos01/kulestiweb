<?php

$nev = $_GET['nev'];
$tel = $_GET['tel'];
$fiz = $_GET['fiz'];

echo <<<EOT
<link rel="stylesheet" href="style.css">

<div id="container">

    <a href="index.php">Főoldal</a><br><br>
    Felvett dolgozó:<br>
    $nev $tel $fiz
EOT;

$conn = mysqli_connect('localhost',
    'barnazrt', '12345', 'barnazrt');

if(!$conn) {
    error_log("Hiba! A kapcsolódás sikertelen!");
}

mysqli_set_charset($conn, "utf-8");

$sql = <<<EOT
insert into dolgozok
(nev, tel, fiz)
values
(?, ?, ?)
EOT;

$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "ssd", $nev, $tel, $fiz);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
mysqli_close($conn);

echo "</div>";


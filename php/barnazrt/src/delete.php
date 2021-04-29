<?php

$az = $_GET['az'];
$nev = $_GET['nev'];

echo <<<EOT
<link rel="stylesheet" href="style.css">

<div id="container">

<a href="index.php">Főoldal</a><br><br>
Törölt dolgozó<br>
azonosító: $az<br>
név: $nev
EOT;


$conn = mysqli_connect('localhost',
    'barnazrt', '12345', 'barnazrt');

if(!$conn) {
    error_log("Hiba! A kapcsolódás sikertelen!");
}

mysqli_set_charset($conn, "utf-8");

$sql = <<<EOT
delete from dolgozok
where az=?
EOT;

$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, "i", $az);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
mysqli_close($conn);

echo "</div>";

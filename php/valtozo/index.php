<?php
echo "<link rel='stylesheet' href='style.css'>";
$szam = 35;
$nev = "Nagy János";

echo $nev . "<br>";
echo "$nev<br>";
echo $szam . "<br>";
echo "$szam<br>";
echo "ötödik";


$fp = fopen("stat.txt", "r");
$sor = fgets($fp);
fclose($fp);

$sor = $sor + 1;

$fp = fopen("stat.txt", "w");
fputs($fp, $sor);
fclose($fp);
echo "<div>Statisztika: $sor</div>";

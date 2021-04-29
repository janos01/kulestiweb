<?php

echo <<<EOT
<link rel="stylesheet" href="style.css">

<div id="container">

<a href='addform.php'>Hozzáadás</a><br>
EOT;

$conn = mysqli_connect('localhost',
    'barnazrt', '12345', 'barnazrt');

if(!$conn) {
    error_log("Hiba! A kapcsolódás sikertelen!");
}

mysqli_set_charset($conn, "utf-8");

$sql = "select * from dolgozok";
$res = mysqli_query($conn, $sql);

$torlesGomb = <<<EOT

<td>
    <form action="delete.php" method="get">
    <input type="hidden" name="az"
    value="{{az}}">

    <input type="hidden" name="nev"
    value="{{nev}}">

    <button type="submit">Törlés</button>
    </form>
</td>
EOT;

echo "<table border='1'>\n";
echo "<tr>\n\t<th>No.</th>\n\t<th>Név</th>\n\t";
echo "<th>Település</th>\n\t<th>Fizetés</th>\n</tr>\n";
while($sor = mysqli_fetch_assoc($res)) {
    $torsor = $torlesGomb;
    echo "\n<tr>\n";  
    echo "<td>" . $sor['az'] . "</td>";
    echo "<td>" . $sor['nev'] . "</td>";
    echo "<td>" . $sor['tel'] . "</td>";    
    echo "<td>" . $sor['fiz'] . "</td>";
    $torsor = str_replace('{{az}}', $sor['az'], $torsor);
    $torsor = str_replace('{{nev}}', $sor['nev'], $torsor);
    echo $torsor;
    echo "\n</tr>\n";
}
echo "</table>";

echo "<script>console.log('lad');</script>";

$sql = "select max(fiz) as maxfiz from dolgozok";
$res = mysqli_query($conn, $sql);
$sor = mysqli_fetch_assoc($res);
echo "Legnagyobb: ".$sor['maxfiz'];
mysqli_close($conn);


echo "</div>";

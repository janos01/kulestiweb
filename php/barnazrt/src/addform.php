<?php
/* addform.php */

echo <<<EOT

<link rel="stylesheet" href="style.css">

<div id="container">
<a href='index.php'>Lista</a><br>

EOT;

//heredoc szintaxis:
echo <<<EOT
<form action="add.php" method="get">
    <label>Név</label>
    <input type="text" name="nev"><br>
    
    <label>Település</label>
    <input type="text" name="tel"><br>
    
    <label>Fizetés</label>
    <input type="text" name="fiz"><br>
    <button type="submit">Hozzáad</button>
    
</form>

</div>
EOT;


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<?php
if (empty($_POST))
{
    $contador = 0;
}
else
{
    $contador = $_POST["contador_post"];
}

?>

<body>
    <form action="index5.php" method="post">
        <input type="text" name="nombre">
        <input type="hidden" name="contador" value="<?php echo $contador?>">
        <input type="submit" value="Dame!!!">
    </form>
</body>
</html>
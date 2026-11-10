<!DOCTYPE html>
<html lang="en">
<?php 
var_export($_POST);
$contador= $_POST['contador']+1;
?>  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index4.php" method="post">
        <div><label>El contador es <?php echo $contador?></label></div>
        <input type="hidden" name="contador_post" value="<?php echo $contador?>">
        <input type="submit" value="volver">
    </form>
</body>
</html>
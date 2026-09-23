<?php
echo "HOLA MUNDO <br/>";
echo 55;

$edad = 24;
$nombre = 45;
$apellido = "Fernández";

echo $edad . $nombre . $apellido;

$tamano = 6;

for ($i = 1; $i <= $tamano; $i++)
{
    echo $i;
    if ($i < $tamano){
        echo ',';
    }
}
echo '<br>';

for ($i = 1; $i <= $tamano; $i++)
{
    if($i>1) echo ',';
    echo $i;
}
// 123456
// 1,2,3,4,5,6
echo '<br>';

$comma = "";
for ($i=1; $i <= $tamano; $i++)
{
    echo $comma . $i;
    $comma=",";
}

echo gettype($edad);
$edad= "ocho";


var_export($edad);

echo gettype($edad);


echo ' el valor de edad es $edad ';
echo " el valor de edad es $edad ";

define('PI',3.141592);

?>


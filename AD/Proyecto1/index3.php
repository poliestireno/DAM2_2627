<?php

function hipotenusa ($cateto = 3, $cateto2 = 4)
{
   return sqrt($cateto * $cateto + $cateto2 * $cateto2);
}

//echo hipotenusa();




function calcularHipotenusa($lado1, $lado2, &$hipotenusa){
    $suma = ($lado1 * $lado1) + ($lado2 * $lado2);
    echo "la hipotenusa dentro es : $hipotenusa";
    $hipotenusa =  sqrt($suma);
}


    calcularHipotenusa(5, 6, $hipo);
    echo"la hipotenusa es : $hipo";



/*
$n = 0;

$n=f($n);

function f($n)
{
    $n= $n +1;
    echo "n dentro de la función es $n";
    return $n;
}

echo "  n es $n";
*/
?>
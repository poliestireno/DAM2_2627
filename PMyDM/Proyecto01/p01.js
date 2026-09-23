/*console.log("HOLA");

let PI = 3.141592;

console.log("PI:"+PI);

PI = 3.15;



if (true) {
  var x = 10;
}
console.log(x); // 10 -> "var" se escapa del bloque { }

if (true) {
  let y = 10;
}
console.log(y); // ❌ ReferenceError: y is not defined



let n = false;

n = n +10;

console.log("valor:"+ typeof n );

n = "CHEMI";

console.log("valor:"+ typeof n + " adios" );

console.log ("modulo:"+ 67%17 );

console.log ("2 elevado a 5:"+ 2**5);
*/
/*
let n = 321;                      //                  1 asignacion      1
// es par??
if (n % 2 === 0)                    //                1 condicion       5
{
  console.log("PAR");               //                1 impresion       3
}
else
{
  console.log ("IMPAR");              //              1 impresion
}
                                      //COMPLEJIDAD = 1 asignacion + 1 condicion + 1 impresion = 1 + 5 + 3 = 9
let num = 322;                        //                1 asignacion
let respuesta ="IMPAR";               //                1 asignacion
if(num % 2 === 0)                     //                1 condicion
{
  respuesta ="PAR";                   //                1 asignacion
}
console.log(respuesta);               //                1 impresion
                                      //   COMPLEJIDAD = 3 asignacion + 1 condicion + 1 impresion = 3 + 5 + 3 = 11
                                      //   COMP CASO MEJOR = 2 asignacion + 1 condicion + 1 impresion = 2 + 5 + 3 = 10
n = 31;
let s ="";
if (n % 2 !== 0)
{
  s="IM";
}
console.log(s+"PAR");                   // COMPLEJIDAD = 3 asignacion + 1 condicion + 1 impresion
                                        //  COMP CASO MEJOR = 2 asignacion + 1 condicion + 1 impresion

let edad = 18;                           // Test1     entrada 34  salida "Eres adulto"
if (edad < 18) {                         // Test2     entrada -1  salida "Eres menor de edad"
  console.log("Eres menor de edad");     // Test3     entrada 18  salida "Eres adulto"
} else if (edad < 65) {                  // Test4     entrada 17  salida "Eres menor de edad"
  console.log("Eres adulto");            // Test5     entrada 65  salida "Eres mayor"
} else {                                 // Test6     entrada 64  salida "Eres adulto"
  console.log("Eres mayor");             // Test7     entrada 99  salida "Eres mayor"
                                         // Test8     entrada maxValue    salida "Eres mayor"
}


negativo bainas
hasta 3 años bebe
menor 10 niñata
hasta 14 niñato
si eres begoña guapa
menor de 18 adolescente
*/
let nombre = "Begoña";
let edad = 19;
if (nombre === "Begoña"){
  console.log("Eres guapa")
} if(edad < 0){
  console.log("Eres un bainas")
} else if (edad <= 3){
  console.log("Eres un bebé")
} else if (edad < 10){
  console.log("Eres una niñata")
} else if (edad <=14){
  console.log("Eres un niñato")
} else if (edad < 18) {
  console.log("Eres adolescente");
} else if (edad < 65) {
  console.log("Eres adulto");
} else {
  console.log("Eres mayor");
}

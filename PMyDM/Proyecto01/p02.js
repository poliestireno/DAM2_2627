
let peso = 90;     // kilogramos
let altura = 1.90; // metros

let imc = peso / (altura ** 2);
console.log("Tu IMC es " + imc.toFixed(1));

if (imc < 18.5) {
  console.log("Bajo peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidad");
}


//funcion normal que haga la media de 4 numeros.



function media(num1, num2, num3, num4)
{
    let suma = num1 + num2 + num3 + num4 ;
    return suma / 4;
}
 console.log(media(1, 3, 5, 25));


const media2 = (num11, num22, num33, num44) =>{
    let suma2 = num11 + num22 + num33 + num44 ;

    return suma2 / 4;
}
console.log(media2(1, 3, 5, 25));

const medi3a = (num111, num222, num333, num444) =>  (num111 + num222 + num333 + num444) / 4 ; 
 
console.log(medi3a(1, 3, 5, 25))


let meses = 0;

for (let saldo = 100;saldo > 0; saldo -=30){
    meses +=1;
    console.log(meses + " " + saldo)
}

let saldo = 100;
meses = 0;

for (; saldo > 0;) {
  saldo -=30;
  meses +=1;
}
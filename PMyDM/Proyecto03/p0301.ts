function saludar(nombre: string) {
  return 'Hola, ' + nombre.toUpperCase();
}

saludar("42"); // revienta en tiempo de ejecución
// TypeError: nombre.toUpperCase is not a function



const aNumeros: number[] = [7,6,56];

const aPuertas: boolean[] = [true,true,true,true,true,false,true];

let aNumeros2 = [7,6,56];

//aNumeros2[2]="ff";

function enchufe (b1 : boolean, b2 : boolean): boolean
{
  return b1 && b2;
}


console.log (enchufe (true,true));



type Casa = {
  puerta: string;
  felpudo: string;
  perro: boolean;
  piscina: boolean;
};

const casa1: Casa = {puerta: "madera",felpudo: "rectangular",perro: true,piscina:false};
console.log (casa1);

interface Casa2 {
  puerta: string;
  felpudo: string;
  perro: boolean;
  piscina: boolean;
};

const nueva_casa : Casa2 = {puerta: "hierro",felpudo: "circular",perro: true,piscina:true};
console.log (nueva_casa);

type estado_boton ='encendido'|'apagado'|'roto';

let mi_boton : estado_boton;
mi_boton = 'roto';
//mi_boton = 'ttt';

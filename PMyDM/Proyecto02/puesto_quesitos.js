import {funcionSerFutbolista,pedirPost} from "./utils.js";



funcionSerFutbolista();

const valor = await pedirPost();
console.log("Valor fuera:"+valor);
console.log("VAlor name:"+valor.name);





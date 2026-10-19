import {PRECIO_BASE,calcularPrecio,pedidoFamiliar} from "./utils.js";

let miDinero = 100;
console.log("Dinero actual:"+miDinero);
miDinero = miDinero - calcularPrecio("perrito");
console.log("Dinero actual:"+miDinero);
miDinero = miDinero - calcularPrecio("tortitas");
console.log("Dinero actual:"+miDinero);

console.log (` Angel va a comer otro perrito y le cuesta ${calcularPrecio("perrito")}`);

pedidoFamiliar
.then(mensaje => console.log(" pedido OK con mensaje:"+mensaje))
.catch(error => console.log(" error al servir el pedido con error:"+error));
console.log("Justo antes he pedido");
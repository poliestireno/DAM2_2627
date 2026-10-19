export const PRECIO_BASE = 10.5;

export function calcularPrecio(producto) 
{
    let precio_final= PRECIO_BASE;
    switch (producto) {
        case "perrito":
            precio_final= precio_final + 4;
            break;
        case "tortitas":
            precio_final= precio_final + 2;
            break;
        default:
            precio_final= precio_final + 0.5;
            break;
    }
    return precio_final;
}


export const pedidoFamiliar = new Promise((resolve, reject) => 
{
    const hayComida = false;
    if (hayComida)
    {
        resolve("pedido en curso");
    }
    else
    {
        reject("no hay comida");
    }
});
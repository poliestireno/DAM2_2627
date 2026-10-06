const marcas_coches = ["bmw","bmw","merdeces","Audi","Audi","toyota","Audi"];




console.log(marcas_coches[2]);


for (let i=0;i<marcas_coches.length;i++)
{
    console.log(marcas_coches[i]);
}

const numeros = [1000,2,30,4,5];
const numerosDobles = numeros.map(n => n * 2);

console.log(numeros);
console.log(numerosDobles);

function mSL (m)
{
    return m + " SLL";
}

//const marcas_coches_sl= marcas_coches.map(marca => marca + " SL");
const marcas_coches_sl= marcas_coches.map(mSL);
console.log(marcas_coches_sl);



// filtro con filter para las marcas que contengan la letra a.

const marcas_Filtradas= marcas_coches.filter(marca => marca.toLowerCase().includes("a"));
console.log(marcas_Filtradas);


// con find , que imprima la primera marca cuyo tamaño de caracteres sea mayor que 4

console.log (marcas_coches.find(m=>m.length>4));



const suma = numeros.reduce((c,a)=>c+a,0);
console.log("suma:"+suma);
/*
1+0 = 1
2+1 = 3
3+3 = 6
4+6 = 10
5+10 = 15
*/

const mul = numeros.reduce((c,a)=>c*a,1);
console.log("multiplicación: "+mul);

/*
c=1
1
c=1
2
c=2
3
c=6
4
c=24
5
c=120
*/

// maximo con reduce.

/*1,23,12,6

c=-1
1
c=1
23
c=23
12
c=23
6
c=23
*/

function miMax (acumulado,actual)
{
    console.log("acumulado:"+acumulado+" actual: "+actual);
    return acumulado>actual?acumulado:actual;
}

console.log(numeros.reduce(miMax,Number.MIN_VALUE));



// reduce sacar el array de ocurrencias
// ["bmw":2, "mercedes":1, "Audi":3,"Toyota":1]


const marcas_coches2 = ["bmw","bmw","merdeces","Audi","Audi","toyota","Audi"];


const marcas_coches3 = marcas_coches2.reduce(ocurrencias,{});

function ocurrencias(acumulado,actual)
{

    if (acumulado[actual]) // si el objeto contiene la propiedad o atributo, sumamos 1 -> objeto.bmw++ <-> objeto['bmw']++
        acumulado[actual]++; // esto es lo mismo que escribir objeto.propiedad = objeto.propiedad + 1
    else // si no existe la propiedad
        acumulado[actual] = 1; // se inicia con valor 1
    return acumulado; // retornamos el objeto '{}' inicial siempre, por ejemplo, se va acumuando tal que:
    /*
        acumulado                             actual
        it1:{}                                bmw
        it2:{bmw:1}                           bmw
        it3:{bmw:2}                           merdeces
        it4:{bmw:2,merdeces:1}                Audi
        it5:{bmw:2,merdeces:1,Audi:1}         Audi
        it6:{bmw:2,merdeces:1,Audi:2}         Toyota
        it7:{bmw:2,merdeces:1,Audi:2,Toyota:1}Audi
        it8:{bmw:2,merdeces:1,Audi:3,Toyota:1}
    */
}

console.log(marcas_coches3);
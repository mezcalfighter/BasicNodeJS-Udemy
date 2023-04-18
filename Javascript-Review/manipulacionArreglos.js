/**
 * Manipulacion arreglos JS
 */

// ForEach

let letras = ['a','b','c','d','e'];

for(let i=0;i<letras.length;i++){
    const element = letras[i];
    console.log(element)
}

letras.forEach((element)=>console.log(element))

// Push - Shift - Pop
// Push - Agregar elementos a un array
let letras2 = ['a','b','c','d','e'];
letras2.push('f');
console.log(letras2)

// Shift - Saca el primer elemento de un arreglo
let primerElemento = letras2.shift();
console.log(primerElemento);
console.log(letras2)

// Pop - Saca el ultimo elemento de un arreglo
let ultimoElemento = letras2.pop();
console.log(ultimoElemento);
console.log(letras2)

/**
 * Map - Transforma un arreglo y crea otro con los elementos mutados, es decir
 *       que no muta el arreglo actual, si no que crea otro mutado a base del primero
 */

let estudiantes = ['Juan','Carlos','Ernesto','Luis'];
let nombresConPunto = estudiantes.map((nombre)=>`${nombre}.`)
let asistencia = estudiantes.map((nombre)=>{
    return {
        nombre:nombre,
        asistencia:false
    }
});
console.log(estudiantes);
console.log(asistencia);
console.log(nombresConPunto);
console.log(estudiantes);

let productos = [
    {nombre:'camisetas',precio:15},
    {nombre:'zapatillas',precio:20},
    {nombre:'pantalon',precio:25}
];

let productosImpuesto = productos.map((producto)=>{
    // si se regresa producto, entonces estoy modificando en memoria el producto y no retornando uno nuevo
    // producto.precioImpuesto = producto.precio * 1.16;
    // return producto;

    // En vez de asignar el producto podemos hacer esto:
    // return {
    //     nombre:producto.nombre,
    //     precio:producto.precio,
    //     precioImpuesto:producto.precio * 1.16
    // };

    //Podemos decirle que expanda todo producto y asi no lo tenemos que hacer manual, se expande con ...
    return {
        ...producto,
        precioImpuesto:producto.precio * 1.16
    };
});

console.log(productos);
console.log(productosImpuesto);

// filter - Inmutable Ayuda a filtrar en base a un condicionante logico
let estudiantes2 = [
    {nombre:'Emanuel',edad:26,matriculado:true},
    {nombre:'Carlos',edad:17,matriculado:false},
    {nombre:'Luis',edad:20,matriculado:true},
    {nombre:'Ernesto',edad:16,matriculado:true},
    {nombre:'Jorge',edad:22,matriculado:false}
];
let estudiantesMatriculados = estudiantes2.filter((estudiante)=>{
    if(estudiante.matriculado === true){
        return estudiante
    };
});
let estudiantesMayores = estudiantes2.filter((estudiante)=>estudiante.edad >= 21);
console.log(estudiantesMatriculados);
console.log(estudiantesMayores);

// reduce
let calificaciones = [3,5,9,10,10];
let suma = calificaciones.reduce((acumulador,calificacion)=>acumulador + calificacion, 0);
console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

let edades = [21,21,23,43,21,43,18,23,23];
// salida: 
// {
//     21:3,
//     43:2
// }
let resultado = edades.reduce((acumulador, edad)=>{
    if(!acumulador[edad]){
        acumulador[edad] = 1
    }else{
        acumulador[edad] += 1
    }
    return acumulador
},{});
console.log(resultado)

let ventas = [
    {nombre:'camiseta',precio:15,totalVendido:10},
    {nombre:'zapatillas',precio:150,totalVendido:8},
    {nombre:'zapatos',precio:90,totalVendido:4},
    {nombre:'pantalon',precio:45,totalVendido:30},
    {nombre:'tenis',precio:75,totalVendido:20}
];
let totalProductos = ventas.reduce((acumulador,producto)=>{
    let totalVentas = producto.precio * producto.totalVendido
    acumulador[producto.nombre] = `$${totalVentas}`;
    return acumulador;
},{});
console.log(totalProductos);

let estudiantes3 = [
    {nombre:'Emanuel',edad:26,matriculado:true},
    {nombre:'Carlos',edad:17,matriculado:false},
    {nombre:'Luis',edad:20,matriculado:true},
    {nombre:'Ernesto',edad:16,matriculado:true},
    {nombre:'Jorge',edad:22,matriculado:false}
];


let cantidadMatriculados = estudiantes3
    .map((estudiante)=>estudiante.matriculado)
    .reduce((acumulador,element)=>{
    if(element){
        acumulador.matriculado += 1
    }else{
        acumulador.noMatriculado += 1
    }
    return acumulador
},{matriculado:0,noMatriculado:0});
console.log(cantidadMatriculados);

// Some - Every
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros.some((number) => number % 2 === 0));

let numerosPares = [2,4,6,8,9];
console.log(numerosPares.every((number) => number % 2 === 0));

// find - findIndex
// find
let clientes = [
    {id:1,nombre:'Emanuel'},
    {id:2,nombre:'Juan'},
    {id:3,nombre:'Ernesto'},
    {id:4,nombre:'Luis'},
    {id:5,nombre:'Joaquin'}
];

let elementoBuscado = clientes.find((cliente)=>cliente.id === 1);
console.log(clientes);
console.log(elementoBuscado);

// findIndex
let indexBuscado = clientes.findIndex((cliente)=>cliente.id === 1);
console.log(clientes);
console.log(indexBuscado);

// includes
let mascotas = ["perro","gato","conejo"];
let resultadoMascotas = mascotas.includes("gato");
console.log(resultadoMascotas);
console.log("Emanuel".includes("a"));

let buscador = (parametro) => {
    let clientes = [
        {id:1,nombre:'Emanuel'},
        {id:2,nombre:'Juan'},
        {id:3,nombre:'Ernesto'},
        {id:4,nombre:'Luis'},
        {id:5,nombre:'Joaquin'}
    ];
};

// Join - Convertir a un string en un array a partir de un caracter
let elementos = ['aire','fuego','agua','tierra'];
// resultadoElementos va a ser un string separado por comas
let resultadoElementos = elementos.join('--');
// aire--fuego--agua--tierra
console.log(resultadoElementos);

let clientes2 = [
    {id:1,nombre:'Emanuel'},
    {id:2,nombre:'Juan'},
    {id:3,nombre:'Ernesto'},
    {id:4,nombre:'Luis'},
    {id:5,nombre:'Joaquin'}
];
console.log(clientes2);
let clientesString = clientes2.join();
// [object Object],[object Object],[object Object],[object Object],[object Object]
console.log(clientesString);

let csvGenerator = (array, separador=',') => {
    let headers = Object.keys(array[0]).join(separador);
    let data = array.map((elemento)=>Object.values(elemento).join(separador));
    console.log(headers);
    data.forEach((elemento)=>console.log(elemento));
};

csvGenerator(clientes2);

// concat -- sort -- splice -- slice
// Concat
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,0];
let array3 = array1.concat(array2);
let array4 = [...array1,...array4]
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// Sort
let array5 = [1,2,3,4,5,6,7,8,9,0];
console.log(array5.sort());
// Se va a ordenar en base al codigo ASCII
let meses = ['Dic','Ene','Feb','Mar','Abr'];
console.log(meses.sort());

let arrayNumeros = [1,10000,21,30,4];
let ordenado = arrayNumeros.sort((a,b)=> a - b );
console.log(ordenado);

// Splice - Eliminar o modificar elementos de un arreglo
let nombres = ['Juan','Carlos','Luis','Emanuel','Mario'];
// Eliminara desde la posicion indicada
nombres.splice(3);
console.log(nombres);
// Elimara desde el rango dado
nombres.splice(1,1);
console.log(nombres);

// Slice - Cortar arreglo
let nombres2 = ['Juan','Carlos','Luis','Emanuel','Mario'];
// Cortar desde la posicion indicada
let resultadoCorte1 = nombres2.slice(3);
console.log(resultadoCorte1);
// Cortar desde el rango dado
let resultadoCorte2 = nombres2.slice(1,2);
console.log(resultadoCorte2);
/**
 * Funciones
 */

// Declarativa
// function nombreDeLaFuncion(parametros){
//     //Haz algo
// }

function saludar(nombre){
    return `Hola soy ${nombre}`;
};
console.log(saludar('Emanuel'));

// Expresion o anonimas
let suma = function (a,b) {
    return a + b
}
console.log(suma(2,3));

// Arrow functions
let restar = (a,b) => a - b
console.log(restar(4,2));
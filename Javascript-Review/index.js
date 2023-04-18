// Hello World - Javascript
console.log("Hello world!");

// Tipos de datos
// Number
let number1 = 10;
let number2 = 20;
console.log(number1 + number2);

// String
let myName = "Emanuel";
console.log(`Hello, my name is ${myName}`);

// Boolean
let myBoolan = true;
console.log(myBoolan);

// Undefined - When it doesn't have a value type
console.log(undefined);

// Null - When it doesn't have a value
console.log(null);

/**
 * Tipos de datos estructurales
 */

// Objecto
let myObject = { name: "Emanuel", age: 26 };
console.log(myObject);

// Array
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

/**
 * Variables - Pequeños  espacios de memoria que almacenan valores
 * 
 * 3 Formas de definir variables: var - let - const
 * 
 */

// Variables con var - Var ya no se utiliza porque genera problemas en el scope ya que las crea globales
// No se debe de utilizar let y var, es mejor solo utilizar let
var miNombre = 'Emanuel Camarena';
console.log(miNombre);

var edad = 26;
console.log(edad);

var persona = {
    nombre:'Emanuel',
    apellido:'Camarena',
    edad:26,
    direccion:{
        calle:'Av. Siempre Viva',
        numeroDeCasa:123
    },
    ciudadesVisitadas:[
        'Cancun',
        'Leon',
        'CDMX',
        'Guadalajara'
    ]
}
console.log(persona.ciudadesVisitadas);

//Variables con let - Funcionan igual pero el scope es diferente
let nombre = 'Emanuel'

// Operadores 
/**
 * Operador de asignacion:
 */

/**
 * 
 */
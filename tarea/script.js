import { suma } from './suma.js';
import { resta } from './resta.js';
import { division } from './division.js';
import { producto } from './producto.js';


let valueA = parseInt(prompt("Ingresa el primer valor a:"));
let valueB = parseInt(prompt("Ingresa el segundo valor b:"));


let resultSuma = suma(valueA, valueB);
let resultResta = resta(valueA, valueB);
let resultDivision = division(valueA, valueB);
let resultProducto = producto(valueA, valueB);

document.getElementById('result').innerHTML = 
    'Suma: ' + resultSuma + '<br>' +
    'Resta: ' + resultResta + '<br>' +
    'División: ' + resultDivision + '<br>' +
    'Producto: ' + resultProducto;
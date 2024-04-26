/* 01 Realizar un programa que dado 2 números imprima por consola si el primer numero es
mayor que el segundo. */
/*
let numero1
let numero2
numero1 = parseInt(prompt("Ingrese el primer número: "))
numero2 = parseInt(prompt("Ingrese el segundo número: "))

if (numero1 => numero2) {
    console.log(`primer número es mayor que segundo número`) 
} 
*/

/* 02 Realizar un programa que dado 2 números imprima por consola si los numeros son
iguales o si son diferentes. */

/* let num1
let num2
num1 = parseInt(prompt("Ingrese el primer número: "))
num2 = parseInt(prompt("Ingrese el segundo número: "))

if (num1 === num2) {
    console.log(`Los dos números son iguales`)
} else {
    console.log(`Los dos números son diferentes`)
} */

/* 03 Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
es el mas grande o si son iguales. */

/* let nume1
let nume2
nume1 = parseInt(prompt("Ingrese el primer número: "))
nume2 = parseInt(prompt("Ingrese el segundo número: "))
if (nume1 > nume2) {
    console.log("El primero del dos numeros es el mas grande")
} else if (nume1 < nume2) {
    console.log("El segundo del dos numeros es el mas grande")
} else {
    console.log("Son Iguales")
} 
 */

/* 04 Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más
chico */

let num1
let num2
let num3
let mayor
num1=parseInt(prompt("ingrese el valor del primer numero"))
num2=parseInt(prompt("ingrese el valor del segundo numero"))
num3=parseInt(prompt("ingrese el valor del tercer numero"))
if (num1 > num2 && num1 > num3) {
    mayor = num1
} else if (num2>num1 && num2>num3) {
    mayor = num2
} else {
   mayor = num3
} 
console.log("el numero mayor es: " + mayor)

/* 05 Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad.*/


let persona1 = {
    nombre: "Carlos",
    edad: "Fernandez",
    altura: 170,
  };
  
  var persona2 = {
    nombre: "Juan",
    edad: "Villalba",
    altura: 155,
  };

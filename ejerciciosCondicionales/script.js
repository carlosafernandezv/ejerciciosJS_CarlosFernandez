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
chico 

let num1
let num2
let num3
let menor
num1=parseInt(prompt("ingrese el valor del primer numero"))
num2=parseInt(prompt("ingrese el valor del segundo numero"))
num3=parseInt(prompt("ingrese el valor del tercer numero"))
if (num1 < num2 && num1 < num3) {
    menor = num1
} else if (num2<num1 && num2<num3) {
    menor = num2
} else {
   menor = num3
} 
console.log("el numero chico es: " + menor)
*/

/* 05 Realizar un programa que dado 2 objetos representando personas con las propiedades
nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
es la de mayor edad. */


let persona1 = {
    nombre: "Carlos",
    edad: 35,
    altura: 150,
};

var persona2 = {
    nombre: "Juan",
    edad: 33,
    altura: 155,
};

if (persona1.altura > persona2.altura && persona1.edad > persona2.edad) {
    console.log(persona1.nombre + " Es mas alto y el de mayor edad")
} else if (persona2.altura > persona1.altura && persona2.edad > persona1.edad) {
    console.log(persona2.nombre + " Es mas alto y " + persona2.nombre + " Es el de mayor edad")
} else if (persona2.altura > persona1.altura && persona1.edad > persona2.edad) {
    console.log(persona2.nombre + " Es mas alto y " + persona1.nombre + " Es el de mayor edad")
} else {
    console.log(persona1.nombre + " Es mas alto y " + persona2.nombre + " Es el de mayor edad")
}

/* 06 Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
mínimo. */

/* 07 Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase
(vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean
tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida */

/* 08 Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
más eficiente. */

/* 09 Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
preguntando si en realidad tiene esa edad. */

/*10 Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa. */

/* 11 Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de
color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol,
Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor:
Excelente elección, no lo teníamos pensado. */

/* 12 Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0 */

/* 13 Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado
dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes. */
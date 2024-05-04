/* 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos). */

/* let numMultiplicar = prompt("Ingrese un numero para mostrarte la tabla de multiplicar")
console.log("tabla del " + numMultiplicar)
for (let i = 1; i <= 10; i++) {
    result = i * numMultiplicar;
    console.log(numMultiplicar + " x " + i + " = " + result);
}
 */
/* 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.  

let num = parseInt(prompt("Ingrese un numero"))
let suma = num


while (num!=0) {
    num = parseInt(prompt("Ingrese un numero"))
    suma += num 
}
console.log( suma)

*/

/* 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado. */
/* let numIncognita = 5
let numIngresado = 0
let numIntentos = 0 
do {
    numIngresado = parseInt(prompt("Ingresa un numero entre 1 y 100"))
    if (numIngresado<numIncognita) {
        console.log("el numero ingresado es menor intentalo de nuevo")
        
    } else {
        console.log("el numero ingresado es mayor intentalo de nuevo")
    }
    numIntentos++
} while (numIngresado != numIncognita);
console.log("Ganaste");
console.log("el numero de intentos fue: " + numIntentos); */


/* 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo. */
/* let m
let bandera
let text1

for (let i = 2; i < numIngresado; i++) {
    m=2
    bandera=true

    while (bandera&&m<i) {
        if (i%m==0) {
            bandera=false;
            
        } else {
            m=m+1
        }
    }
    if (bandera&&text1>1) {
        console.log("el numero " +x+ " es primo ");
        
    }

} */

/* 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores. */
/* var n = prompt("escribe un numero")
var contador = 1
while (contador<=n) {
    if (n%contador==0) {
        console.log(contador);        
    }
    contador++;
    
} */

/* 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array. 

arregloNumeros=[10,20,30,40,50,60,70,80,90,100];
for (let i = 0; i < arregloNumeros.length; i++) {
    console.log(arregloNumeros[i]);
}
*/
/* 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos. 
arregloNumeros=[10,20,30,40,50,60,70,80,90,100];
for (let i = 0; i < arregloNumeros.length; i++) {
    console.log(arregloNumeros[i]*2);
}
*/
/* 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array. */

/* 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares. 

let numeros = [ 80, 65, 35, 20, 42, 58, 96, 54, 45,63]
//Uso filter (que es un filtro en arreglo) para obtener solo los números que 
// tengan residuo 0.
const impares = numeros.filter(x=> x%2 === 0).length
console.log('La cantidad de numeros impares que hay es: ' + impares)
*/
/* 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0. */

/* 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande. 
let numeros = [ 80, 65, 35, 20, 42, 58, 96, 54, 45,63]
let mayor = 0

for (i = 0; i < numeros.length; i++) {
    
   if (numeros[i]>mayor){
    mayor=numeros[i]
   }
  
}
console.log(mayor);*/
/* 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico. 
let arreglo = [3 , 6, 2, 56, 32, 5, 89, 32];
let mayor2 = arreglo.length;
 
for(i = 0; i < arreglo.length; i++){
    if (arreglo[i] < mayor2)
    {
        mayor2 = arreglo[i];
    }
}
 
console.log(mayor2);*/

/* 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora. */

/* 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado. 
let asterisco = "*"
console.log(asterisco);
for (let i = 0; i < 4; i++) {
    asterisco+="*"
    console.log(asterisco);
    
}*/
/* 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido. */

// PEDIMOS EL NÚMERO POR TECLADO
var numrep = "*";
// SI LO INTRODUCIDO ES UN NÚMERO
var rep, i;
// BUCLE QUE VA DESDE numrep HASTA 1
for (i = numrep; i >= 1; i--) {
    // BUCLE DESDE i HASTA 1
    for (rep = i; rep >= 1; rep--) {
        console.log(i);
    }
    document.write("<br>");
}
/* 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)
ciclo dentro de ciclo
algoritmo burbuja
*/
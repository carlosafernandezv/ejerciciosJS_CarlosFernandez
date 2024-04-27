/* 01 Realizar un programa que dado 2 números imprima por consola si el primer numero es
mayor que el segundo. */
let numero1_1
let numero2_1
numero1_1 = parseInt(prompt("Ingrese el primer número: "))
numero2_1 = parseInt(prompt("Ingrese el segundo número: "))

if (numero1_1 => numero2_1) {
    console.log("primer número es mayor que segundo número") 
} 


/* 02 Realizar un programa que dado 2 números imprima por consola si los numeros son
iguales o si son diferentes. */
let num1_2
let num2_2
num1_2 = parseInt(prompt("Ingrese el primer número: "))
num2_2 = parseInt(prompt("Ingrese el segundo número: "))
if (num1_2 === num2_2) {
    console.log("Los dos números son iguales")
} else {
    console.log("Los dos números son diferentes")
}

/* 03 Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
es el mas grande o si son iguales. */
let nume1_3
let nume2_3
nume1_3 = parseInt(prompt("Ingrese el primer número: "))
nume2_3 = parseInt(prompt("Ingrese el segundo número: "))
if (nume1_3 > nume2_3) {
    console.log("El primero del dos numeros es el mas grande")
} else if (nume1_3 < nume2_3) {
    console.log("El segundo del dos numeros es el mas grande")
} else {
    console.log("Son Iguales")
} 

/* 04 Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más
chico */
let num1_4
let num2_4
let num3_4
let menor_4
num1_4=parseInt(prompt("ingrese el valor del primer numero"))
num2_4=parseInt(prompt("ingrese el valor del segundo numero"))
num3_4=parseInt(prompt("ingrese el valor del tercer numero"))
if (num1_4 < num2_4 && num1_4 < num3_4) {
    menor_4 = num1_4
} else if (num2_4<num1_4 && num2_4<num3_4) {
    menor_4 = num2_4
} else {
   menor_4 = num3_4
} 
console.log("el numero chico es: " + menor_4)

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
let nombre6
let edad6
let altura6
let vision6
nombre6 = prompt("Ingresa tu nombre")
edad6 = parseInt(prompt("Ingresa tu edad"))
altura6 = parseInt(prompt("Ingresa tu altura"))
vision6 = prompt("Ingresa tu vision en una escala de 1 a 10")

if ((edad6 >= 18 && altura6 >= 150) && vision6 >= 8) {
    console.log("Felicitaciones estas capacitado para conducir")
} else {
    console.log("Lo siento aun no estas capacitado para conducir")
}

/* 07 Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase
(vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean
tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el
mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida */
let NombreMio = "jheesfri"
let pase = "vip"
let entrada = "si"
let usarEntrada = "si"
let valor_entrada = 1000
let NombreUser, paseUser, entradaUser, usar_entrada_user
NombreUser = prompt("Ingresa tu nombre")
paseUser = prompt("Ingresa tu pase vip o normal")
entradaUser = prompt("Ingresa ¨si¨ si posees entrada y ¨no¨ en caso contrario")
if (NombreMio == NombreUser || pase == paseUser) {
    console.log("Bienvenido puedes ingresar")
} else if (entrada == entradaUser) {
    usar_entrada_user = prompt("Desea usar la entrada ¨si¨ o ¨no¨")
    if (usarEntrada == usar_entrada_user) {
        console.log("Bienvenido puedes ingresar")
    } else {
        console.log("ok, muchas gracias esperamos que vuelvas pronto")
    }
} else {
    let deseas_comprar = prompt("deseas comprar entrada ¨si¨ o ¨no¨")
    if (deseas_comprar == "si") {
        let dinero_disponible = prompt("Dinero disponible")
        if (dinero_disponible >= valor_entrada) {
            console.log("Compra exitosa, Puedes entrar")
        } else {
            console.log("Compra fallida")
        }
    }
    console.log("ok, muchas gracias esperamos que vuelvas pronto")
}

/* 08 Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
más eficiente. */
let numeroIncognita = 5
let numeroIngresado = parseInt(prompt("Ingresa un numero entre 1 y 10"));
if (numeroIngresado == numeroIncognita) {
    console.log("ADIVINASTE, FELICITACIONES");
} else if (numeroIngresado > numeroIncognita) {
    numeroIngresado = parseInt(prompt("El numero ingresado es mayor, vuelve a intentarlo, ingresa otro ->"));
    if (numeroIngresado == numeroIncognita) {
        console.log("ADIVINASTE, FELICITACIONES");
    } else if (numeroIngresado > numeroIncognita) {
        numeroIngresado = parseInt(prompt("El numero ingresado es mayor, vuelve a intentarlo, ingresa otro ->"));
        if (numeroIngresado == numeroIncognita) {
            console.log("ADIVINASTE, FELICITACIONES");
        } else if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, PERDISTE");
        } else {
            console.log("El numero ingresado es menor, PERDISTE");
        }
    } else {
        numeroIngresado = parseInt(prompt("El numero ingresado es menor, vuelve a intentarlo, ingresa otro ->"));
        if (numeroIngresado == numeroIncognita) {
            console.log("ADIVINASTE, FELICITACIONES");
        } else if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, PERDISTE");
        } else {
            console.log("El numero ingresado es menor, PERDISTE");
        }
    }
} else {
    numeroIngresado = parseInt(prompt("El numero ingresado es menor, vuelve a intentarlo, ingresa otro ->"));
    if (numeroIngresado == numeroIncognita) {
        console.log("ADIVINASTE, FELICITACIONES");
    } else if (numeroIngresado > numeroIncognita) {
        numeroIngresado = parseInt(prompt("El numero ingresado es mayor, vuelve a intentarlo, ingresa otro ->"));
        if (numeroIngresado == numeroIncognita) {
            console.log("ADIVINASTE, FELICITACIONES");
        } else if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, PERDISTE");
        } else {
            console.log("El numero ingresado es menor, PERDISTE");
        }
    } else {
        numeroIngresado = parseInt(prompt("El numero ingresado es menor, vuelve a intentarlo, ingresa otro ->"));
        if (numeroIngresado == numeroIncognita) {
            console.log("ADIVINASTE, FELICITACIONES");
        } else if (numeroIngresado > numeroIncognita) {
            console.log("El numero ingresado es mayor, PERDISTE");
        } else {
            console.log("El numero ingresado es menor, PERDISTE");
        }
    }
}


/* 09 Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
preguntando si en realidad tiene esa edad. */
edad = parseInt(prompt("Ingresa tu edad en numeros"));
if (edad > 100) {
    esVerdad = confirm("¿En realidad esa es tu edad?");
    if (esVerdad == true) {
        console.log("Llego tu hora amigo, despidete");
    } else {
        console.log("Me siento como cuando tu EX te mintio");
    }
} else if (edad > 45) {
    console.log("Eres un anciano");
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven");
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolecente");
} else if (edad > 0 && edad <= 12) {
    console.log("Eres un infante");
} else {

    console.log("Pajudo");
}

/*10 Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
trampa. */
jugador1 = prompt("Jugador1 ingresa PIEDRA, PAPEL O TIJERA");
respuesta1 = jugador1.trim().toUpperCase();
jugador2 = prompt("Jugador2 ingresa PIEDRA, PAPEL O TIJERA");
respuesta2 = jugador2.trim().toUpperCase();
if (respuesta1 == respuesta2) {
    console.log("Empate muchachos");
} else if (respuesta1 == "PIEDRA") {
    if (respuesta2 == "PAPEL") {
        console.log("Jugador 2 GANO");
    } else {
        console.log("Jugador 1 GANO");
    }
} else if (respuesta1 == "PAPEL") {
    if (respuesta2 == "TIJERA") {
        console.log("Jugador 2 GANO");
    } else {
        console.log("Jugador 1 GANO");
    }
} else if (respuesta1 == "TIJERA") {
    if (respuesta2 == "PIEDRA") {
        console.log("Jugador 2 GANO");
    } else {
        console.log("Jugador 1 GANO");
    }
} else if (respuesta2 == "PIEDRA") {
    if (respuesta1 == "PAPEL") {
        console.log("Jugador 1 GANO");
    } else {
        console.log("Jugador 2 GANO");
    }
} else if (respuesta2 == "PAPEL") {
    if (respuesta1 == "TIJERA") {
        console.log("Jugador 1 GANO");
    } else {
        console.log("Jugador 2 GANO");
    }
} else if (respuesta2 == "TIJERA") {
    if (respuesta1 == "PIEDRA") {
        console.log("Jugador 1 GANO");
    } else {
        console.log("Jugador 2 GANO");
    }
} else {
    console.log("Escriba bien su respuesta");
}

/* 11 Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de
color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol,
Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor:
Excelente elección, no lo teníamos pensado. */
let color_11 = prompt("Ingrese un color")
switch (color_11) {
    case "blanco":
        console.log("falta de color");
        break;
    case "negro":
        console.log("falta de color");
        break;
    case "verde":
        console.log("el color de la naturaleza");
        break;
    case "azul":
        console.log("el color del agua ");
        break;
    case "amarillo":
        console.log("el color del sol");
        break;
    case "rojo":
        console.log("el color del fuego");
        break;
    case "marron":
        console.log("el color de la tierra");
        break;
    default:
        console.log("Excelente eleccion no lo teniamos pensado");
        break;
}
/* 12 Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
ERROR si el divisor ingresado fue 0 */
let num1_12
let num2_12
let operacion_12
let suma_12
let resta_12
let multiplicacion_12
let división_12

num1_12 = parseInt(prompt("ingresa el primer numero"))
num2_12 = parseInt(prompt("ingresa el segundo numero"))
operacion_12 = prompt("ingresa el primer numero")

switch (operacion_12) {
    case "suma_12":
        suma_12 = num1_12 + num2_12
        console.log("el resultado de tu suma es: " + suma_12)
        break;

    case "resta_12":
        resta_12 = num1_12 - num2_12
        console.log("el resultado de tu resta es: " + resta_12)
        break;
    case "multiplicacion_12":
        multiplicacion_12 = num1_12 * num2_12
        console.log("el resultado de tu multiplicacion es: " + multiplicacion_12)
        break;
    case "división_12":
        if (num2_12 === 0) {
            console.log("No se puede dividir entre cero ")

        } else {
            división_12 = num1_12 / num2_12
            console.log("el resultado de tu division es: " + división_12)
        }
        break;
    default:
        console.log("no tenemos esa operacion disponible aún")
        break;
}

/* 13 Crear un programa que permita ingresar todos los datos de tu documento nacional de
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado
dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes. */

let id = parseInt(prompt("Ingresa el numero de tu cedula").trim());
let apellidos = prompt("Escribe solo tus apellidos").trim().toLowerCase().split(" ");
let nombres = prompt("Escribe solo tus nombres").trim().toLowerCase().split(" ");
let nacimiento = prompt("Ingresa tu fecha de nacimiento en este formato DD/MM/AAAA").trim();
let municipioNacimiento = prompt("Ingresa el municipio de nacimiento").trim().toLowerCase().split(" ");
let departamentoNacimiento = prompt("Ingresa el departamento de nacimiento").trim().toLowerCase().split(" ");
let estatura = parseInt(prompt("Ingresa tu estura en centimetros").trim());
let sangre = prompt("Ingresa tu tipo de sangre, ejemplo O+, AB").trim().toUpperCase();
let genero = prompt("Ingresa tu genero, Hombre o Mujer").trim().toLowerCase().split(" ");
let fechaExpedicion = prompt("Ingresa la fecha de expedicion del documento en formato DD/MM/AAAA").trim();
let lugarExpedicion = prompt("Ingresa el lugar de expedicion del documento").trim().toLowerCase().split(" ");

function ordenar(texto) {
    if (texto.length == 2) {
        let nombre1 = texto[0].slice(1)
        let nombre2 = texto[1].slice(1)
        let primeraNombre1 = texto[0].charAt(0).toUpperCase();
        let primeraNombre2 = texto[1].charAt(0).toUpperCase();
        return primeraNombre1 + nombre1 + " " + primeraNombre2 + nombre2;

    } else {
        let restante = texto[0].slice(1);
        let primeraLetra = texto[0].charAt(0).toUpperCase();
        texto[0] = primeraLetra + restante + " ";
        return texto.join(" ")
    }
}


apellidos = ordenar(apellidos);
nombres = ordenar(nombres);
municipioNacimiento = ordenar(municipioNacimiento);
departamentoNacimiento = ordenar(departamentoNacimiento);
genero = ordenar(genero);
lugarExpedicion = ordenar(lugarExpedicion);

respuesta = confirm(`Tu numero de cedula es: ${id}, tu(s) apellidos son : ${apellidos}, tu(s) nombres son: ${nombres}, naciste el ${nacimiento} en ${municipioNacimiento} en el departamento ${departamentoNacimiento}, tu altura es: ${estatura} cms, tipo de sangre: ${sangre}, tu genero es: ${genero}, la fecha de expedicion de tu documento es ${fechaExpedicion} en el municipio ${lugarExpedicion}, ESTAN CORRECTO LOS DATOS?`);

if (respuesta) {
    let dni = {
        numero: id,
        apellidos: apellidos,
        nombres: nombres,
        fechaNacimiento: nacimiento,
        municipioNacimiento: municipioNacimiento,
        departamentoNacimiento: departamentoNacimiento,
        altura: estatura,
        tipoSangre: sangre,
        genero: genero,
        fechaDeExpedicion: fechaExpedicion,
        lugarDeExpedicion: lugarExpedicion
    };
    console.table(dni);
    console.log("El registro fue exitoso");
} else {
    console.log("Vuelva a intentarlo en 1 mes");
}
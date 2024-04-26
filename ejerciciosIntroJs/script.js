let miNombre = "Carlos "
let miApellido = "Fernandez "
let miEdad = 36
let miMascota = " Motita "
let edadMascota = 1
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
let nombreCompleto = miNombre + miApellido
let textoPresentacion = miNombre + miApellido + miEdad + miMascota + edadMascota
console.log(textoPresentacion)
let sumaEdades = miEdad + edadMascota
let restaEdades = miEdad - edadMascota
let productoEdades = miEdad * edadMascota
let divisionEdades = miEdad / edadMascota
miNombre = prompt("ingresa tu nombre")
miApellido = prompt("ingresa tu apellido")
miEdad = prompt("ingresa tu edad")
miMascota = prompt("ingresa el nombre de tu mascota")
edadMascota = prompt("ingresa la edad de tu mascota")
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
nombreCompleto = miNombre + miApellido
let textoPresentacion2 = miNombre + miApellido + miEdad + miMascota + edadMascota
console.log(textoPresentacion)
let alumno = {
    nombre: "Carlos",
    apellido: "Fernandez",
    cedula: 1065232545,
    edad: 36,
    genero: "Masculino",
}
console.table(alumno)
mascota = {
    nombre: "Carlos",
    raza: "Boxer",
    color: "blanco",
    edad: 1,
    genero: "femenino",
}
console.table(alumno)
let frutas = ["naranja ", "mandarina ", "pera ", "manzana ", "pera "]
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
let numeros = ["1 ", "2 ", "3 ", "4 ", "5 "]
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
let familia = ["Nehemias", "Julia", "Jorge", "Carlos", "Juan"]
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])
let textoAleatorio = frutas[1] + numeros[1] + familia[4]
console.log(textoAleatorio)
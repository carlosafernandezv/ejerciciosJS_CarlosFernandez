let notes = {
    events: [
        {
            _id: 1,
            name: "Sacar la basura",
            date: "2022-12-12",
            description:
                "mi mama me va a retar si no lo hago",
            category: "Home",
            realizada: false,
        },
        {
            _id: 2,
            name: "Korean style",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Work",
            realizada: false,
        },
        {
            _id: 3,
            name: "Metallica in concert",
            date: "2023-01-22",
            description:
                "The only concert of the most emblematic band in the world.",
            category: "Personal",
            realizada: false,
        },
    ],
};
console.log(notes);

let notas = notes.events
let padreTarjetas = document.querySelector(".cardPadre")
let addBtn = document.querySelector("#BtnSave")
let titleAdd = document.querySelector("#titleAddNote").value
let descriptionAdd = document.querySelector("#descriptionAddNote").value
id = notas._id
let idGlobal = notas[notas.length - 1]._id;

function crearTarjeta(divPadre, tarjeta) {
    let nuevaTarjeta = document.createElement("div")
    nuevaTarjeta.classList.add("col")
    nuevaTarjeta.innerHTML = `
<div class="card border-success shadow-sm">

    <div class="card-body ">

        
            <div>

                <input class="form-check-input checked ${tarjeta._id}" id="Check ${tarjeta._id}" onClick="marcarRealizada(${tarjeta._id})" type="checkbox" ${tarjeta.realizada? "checked": ""}>
                <label class="form-check-label card-title h5" for="Check ${tarjeta._id}"> ${tarjeta.name} </label>
            </div>

        <p class="card-text h">${tarjeta.description}</p>
        <div class="d-flex justify-content-end ">
            <botton class="btn btn-sm btn-secondary mx-3" onclick="borrarNota(${tarjeta._id})"><i class="bi bi-trash-fill"> </i>Delete</botton>
        </div>
    </div>
</div>
`
    divPadre.appendChild(nuevaTarjeta)
    
}

pintarTarjetas(notas, padreTarjetas)

function pintarTarjetas(arregloAPintar, divPadre) {
     
    divPadre.innerHTML = ""
    for (let i = 0; i < arregloAPintar.length; i++) {
        crearTarjeta(divPadre, arregloAPintar[i])
    }
    if (notas==0) {
        padreTarjetas.innerHTML = `<p>NO HAY NOTAS PARA MOSTRAR</p>`
        
    }
}

function borrarNota(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i]._id === id) {
            notas.splice(i, 1)
        }
    }
    pintarTarjetas(notas, padreTarjetas)
}

function agregarNota() {
    const titulo = document.getElementById("titleAddNote").value;
    const descripcion = document.getElementById("descriptionAddNote").value;

    
    const nuevoId = idGlobal + 1;

    // Crea un nuevo objeto con los valores del formulario
    const nuevoElemento = { _id: nuevoId, name: titulo, description: descripcion };

    // Agrega el nuevo elemento al array
    notas.push(nuevoElemento);

    // Limpia los campos del formulario
    document.getElementById("titleAddNote").value = "";
    document.getElementById("descriptionAddNote").value = "";

    pintarTarjetas(notas,padreTarjetas)
}

function limpiarElemento() {
    document.getElementById("titleAddNote").value = "";
    document.getElementById("descriptionAddNote").value = "";
}

function revisar(titulo, descripcion){
    titulo = document.getElementById("titleAddNote").value;
    descripcion = document.getElementById("descriptionAddNote").value;
    if (titulo==="" || descripcion==="") {
        alert("llene los campos")        
    } else {
        
        agregarNota()
    }
    
}




function marcarRealizada(idObjeto){
    if (notas[idObjeto-1].realizada == true){
        console.log("false");
        notas[idObjeto-1].realizada = false
    
    }else{
        notas[idObjeto-1].realizada = true
        console.log("true");
    }
    

}
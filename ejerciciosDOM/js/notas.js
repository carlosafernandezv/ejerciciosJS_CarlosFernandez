let notes = {
    events: [
        {
            _id: 1,
            name: "Sacar la basura",
            date: "2022-12-12",
            description:
                "mi mama me va a retar si no lo hago",
            category: "Home",
            done: false,
        },
        {
            _id: 2,
            name: "Korean style",
            date: "2023-08-12",
            description:
                "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Work",
            done: false,
        },
        {
            _id: 3,
            name: "Metallica in concert",
            date: "2023-01-22",
            description:
                "The only concert of the most emblematic band in the world.",
            category: "Personal",
            done: false,
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
let checkdone = document.getElementById("Check ${tarjeta._id}");
console.log(checkdone);
/*
<botton class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#modalUpdateNote${tarjeta._id}" onClick=""> <i class="bi bi-pencil-square"></i> Edit</botton>
<div class="modal" tabindex="-1" id="modalUpdateNote${tarjeta._id}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Update note</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <input type="text" class="form-control" id="updateTitle${tarjeta._id}" placeholder="Add title..."
                                        value="" required="">
                                    <textarea class="form-control my-3" id="textareUpdateNote${tarjeta._id}"
                                        placeholder="Add description..." rows="5"></textarea>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-success">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
 */


function crearTarjeta(divPadre, tarjeta) {
    let nuevaTarjeta = document.createElement("div")
    nuevaTarjeta.classList.add("col")
    nuevaTarjeta.innerHTML = `
<div class="card border-success shadow-sm">

    <div class="card-body ">

        
            <div>

                <input class="form-check-input checked" id="Check ${tarjeta._id}" value="" onclick="marcarRealizada(${tarjeta.id})" type="checkbox" ${tarjeta.done? "checked": ""}>
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
    //console.log(nuevaTarjeta);
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

/* function marcarRealizada(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i]._id === id) {
            notas.done "checked": "true"
            console.log(realizada);
        }
    }

    //si checkbos esta true cambia done de false a true
    
} */

  
  // Función para marcar una nota como realizada o no realizada
/*   function marcarRealizada(id) {
    // Buscar la nota con el ID proporcionado
    let nota = notas.find(n => n.id === id);
  
    if (nota) {
      // Cambiar el valor de la propiedad 'realizada'
      notas.done = !nota.done;
      // Aquí podrías actualizar la interfaz para reflejar el cambio
      // por ejemplo, volver a pintar los elementos en pantalla.
      console.log(`Nota ${notas._id} marcada como ${notas.realizada ? 'realizada' : 'pendiente'}.`);
    } else {
      console.log(`No se encontró una nota con el ID ${id}.`);
    }
  }
  
  // Ejemplo de uso: */

/* let checkbox = document.querySelector(".checked")
checkbox.addEventListener('change', (evento)=> {
    let arrayRealizadas = notas.filter(ele => notas.done === true)
    padreTarjetas.innerHTML = ""
    if(evento.target.checked){
        for (let i = 0; i < arrayRealizadas.length; i++) {
            pintarNotas(padreTarjetas, arrayRealizadas[i])
        }
    }else{
        for (let i = 0; i < notas.length; i++) {
            pintarNotas(padreTarjetas, notas[i])
        }
        
    }
    
}) */

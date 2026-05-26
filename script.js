//Buscamos los input por su ID
const inp_nomTarea = document.getElementById("task-name");
const inp_nomDesc = document.getElementById("task-desc");
const inp_nomResp = document.getElementById("task-resp");

//Buscamos el contenedor de Tareas en curso
const contenedorCurso = document.getElementById("task-curso");
//Creamos la constante de botón
const boton = document.getElementById("submit");
//Agregamos el evento Click al boton creado anteriormente
boton.addEventListener("click", () => {
    //Detenemos el envio del formulario para que no se recargue la página
    event.preventDefault();
    //Creamos la tarjeta para la información de la tarea
    const tarjeta_task = document.createElement("div");
    //Creamos los elementos que contendra el componente, en este caso
    //Titulo de la tareas, Desc de la tarea y Responsable
    const nom_tarea = document.createElement("h4");
    const desc_tarea = document.createElement("p");
    const resp_tarea = document.createElement("p");

    //Le damos el contexto a los elementos
    nom_tarea.textContent = inp_nomTarea.value;
    desc_tarea.textContent = inp_nomDesc.value;
    resp_tarea.textContent = "Responsable: " + inp_nomResp.value;
    
    //Agregamos todos los componentes a la tarjeta de Tareas Realizadas
    tarjeta_task.append(nom_tarea, desc_tarea, resp_tarea);
    
    //Agregamos la tarjeta a una clase para darle estilo
    //DEFINIR ESTILO EN CSS *PENDIENTE*
    tarjeta_task.classList.add("tarjeta_obj");

    //Agregamos la tarjeta al contenedor de tareas
    contenedorCurso.appendChild(tarjeta_task);

    //Limpiamos los inputs para la siguiente tarea
    nom_tarea.value = "";
    desc_tarea.value = "";
    resp_tarea.value = ""; 

    console.log(contenedorCurso);
})

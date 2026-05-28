//Buscamos los input por su ID
const inp_nomTarea = document.getElementById("task-name");
const inp_nomDesc = document.getElementById("task-desc");
const inp_nomResp = document.getElementById("task-resp");
const inp_fechaIni = document.getElementById("fecha_ini");
const inp_fechaTer = document.getElementById("fecha_fin");

//Buscamos el contenedor de Tareas en curso
const contenedorCurso = document.getElementById("task-curso");
//Buscamos el contenedor de Tareas Pendientes
const contenedorPend = document.getElementById("task-pend");
//Buscamos el contenedor de Tareas Realizadas
const contenedorReal = document.getElementById("task-fin");

//Creamos la constante de botón
const boton = document.getElementById("submit");
//Agregamos el evento Click al boton creado anteriormente
boton.addEventListener("click", () => {
        //Detenemos el envio del formulario para que no se recargue la página
        event.preventDefault();

        //Condicional para no crear tareas en blanco.
        if (inp_nomTarea.value.trim() == "" || inp_nomDesc.value.trim() == "" || inp_nomResp.value.trim() == "") {
            alert("Por favor, rellena todos los campos antes de agregar la tarea.");
        } else {
        //Creamos la tarjeta para la información de la tarea
        const tarjeta_task = document.createElement("div");
        const contador_task = Array.from(document.querySelectorAll(".tarjeta_obj"));

        console.log(contador_task.length);

        //Hacemos que la tarjeta sea Draggable para el desplazamiento dentro de los componentes
        tarjeta_task.draggable = true;

        //Le asignamos un ID
        tarjeta_task.id = "tarea-" + Date.now();

        //Creamos los elementos que contendra el componente, en este caso
        //Titulo de la tareas, Desc de la tarea, Responsable y ID
        const nom_tarea = document.createElement("h4");
        const desc_tarea = document.createElement("p");
        const resp_tarea = document.createElement("p");
        const fecha_ini = document.createElement("p");
        const fecha_fin = document.createElement("p");
        const btn_eli = document.createElement("button");
        const icono_eli = document.createElement("img");

        //Le damos el contexto a los elementos
        nom_tarea.textContent = inp_nomTarea.value;
        desc_tarea.textContent = inp_nomDesc.value;
        resp_tarea.textContent = "Responsable: " + inp_nomResp.value;
        fecha_ini.textContent = inp_fechaIni.value;
        fecha_fin.textContent = inp_fechaTer.value;

        //Configuración del icono eliminar
        icono_eli.src = "./img/basurero.png"
        icono_eli.alt = "Icono eliminar";
        
        //Agregamos todos los componentes a la tarjeta de Tareas Realizadas
        tarjeta_task.append(nom_tarea, desc_tarea, resp_tarea, 
        fecha_ini, fecha_fin, btn_eli);

        //Agregamos el icono de eliminar dentro del boton
        btn_eli.append(icono_eli);

        //Agregamos la tarjeta a una clase para darle estilo
        tarjeta_task.classList.add("tarjeta_obj");
        //Agregamos clase de btn btn-danger al boton de eliminar para darle un estilo de Bootstrap
        btn_eli.classList.add("btn", "btn-danger");
        //Agregamos clase a la imagen del boton eliminar
        icono_eli.classList.add("img-fluid", "supr");

        //Agregamos la tarjeta al contenedor de tareas
        contenedorCurso.appendChild(tarjeta_task);

        //Limpiamos los inputs para la siguiente tarea
        nom_tarea.value = "";
        desc_tarea.value = "";
        resp_tarea.value = "";

        //Funcion para hacer Drag & Drop con las cartas creadas
        tarjeta_task.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", tarjeta_task.id) 
        });
        

        //Funcion para eliminar elementos con boton eliminar
        btn_eli.addEventListener("click", () => {
            alert("¿Esta seguro que desea eliminar esta tarjeta?"); 
            tarjeta_task.remove();
        });
    //Cierre del ELSE    
    }
    //Cierre del addEventListener
});    

    //Permitimos que entren cosas flotando para los contenedor Tareas en Curso | Tareas Pendientes | Tareas Realizadas
    contenedorPend.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    contenedorCurso.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    contenedorReal.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    //Capturamos el objeto cuando lo sueltan en contenedor Tareas en Curso | Tareas Pendiente | Tareas Realizadas
    contenedorPend.addEventListener("drop", (e) => {
        const idTarea = e.dataTransfer.getData("text/plain");
        const tarjetaDrop = document.getElementById(idTarea);
        contenedorPend.appendChild(tarjetaDrop);
    });
    
    contenedorCurso.addEventListener("drop", (e) => {
        const idCurso = e.dataTransfer.getData("text/plain");
        const tarjetaDropCurso = document.getElementById(idCurso);
        contenedorCurso.appendChild(tarjetaDropCurso);
    });

    contenedorReal.addEventListener("drop", (e) => {
        const idReal = e.dataTransfer.getData("text/plain");
        const tarjetaDropReal = document.getElementById(idReal);
        contenedorReal.appendChild(tarjetaDropReal);
    });

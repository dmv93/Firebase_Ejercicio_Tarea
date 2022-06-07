
    //Me traigo mi db firestore
    import { getTasks, insertTask, deleteTask,updateTask} from "./utils.js";
    //console.log(db);
    //Extraigo todos los documentos de tasks y creo tarjetas con ellos
    getTasks();


    //Obtenemos el form y capturamos el submit
    const form = document.getElementById("task-form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        const task = {
            title: form["task-title"].value,
            description: form["task-description"].value
        }

        insertTask(task);
    })


    const buttonsCardD = document.getElementsByName("delete");
    buttonsCardD.forEach(element => {
        element.addEventListener("click",  () => {
            var divDelete = element.parentNode.parentNode;
            console.log(divDelete);
            document.body.removeChild(divDelete);
            //console.log("Estoy borrando la tarea: "+element.id);
            deleteTask(element.id);
        })
    });

    const buttonsCardDUpdate = document.getElementsByName("update");

    
    buttonsCardDUpdate.forEach(element => {
        element.addEventListener("click", e => {
            e.preventDefault();

            document.getElementById("updatear").style = 'inline'

            var ocultar = document.getElementById("introducir")
            ocultar.style.display = 'none'

            document.getElementById('btn').name = element.id
        })
        
    });


    const comprobar = document.getElementById('update-form')

    comprobar.addEventListener("submit", e => {
        e.preventDefault();
        //alert(document.getElementById('btn').name
        const task = {
            title: comprobar["update-title"].value,
            description: comprobar["update-description"].value
            }

            
            updateTask(document.getElementById('btn').name,task)
    })
    // const buttonUpdateo = document.getElementsByName("update");
    // const comprobar = document.getElementsByName('btn')

    // buttonUpdateo.addEventListener("click", e => {
    //     e.preventDefault();

    //     var ocultar = document.getElementById("introducir")
    //     ocultar.style.display = 'none'

    //     var mostrar = document.getElementById("updatear")
    //     mostrar.style.display = 'inline'
        
    //     const task = {
    //         title: comprobar["update-title"].value,
    //         description: comprobar["update-description"].value
    //     }
    //     updateTask(id, task)
    // })






//     comprobar.forEach(element => {
//         element.addEventListener("click", e => {
//             e.preventDefault();

//         const task = {
//             title: comprobar["update-title"],
//             description: comprobar["update-description"]
//     }
//         })
//     })
//      })
    
// });
// updateTask(id, task);
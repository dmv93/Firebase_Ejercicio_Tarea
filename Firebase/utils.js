    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
    import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc,updateDoc} from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCnE5iMJyPJhAzYJY4C7PiU4n6VuBSzLd8",
        authDomain: "primer-proyecto-a108c.firebaseapp.com",
        projectId: "primer-proyecto-a108c",
        storageBucket: "primer-proyecto-a108c.appspot.com",
        messagingSenderId: "693105517540",
        appId: "1:693105517540:web:4656dea09febfef88f1df1"
      };

    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
    export const querySnapshot = await getDocs(collection(db, "tasks"));

    function createCard(id, task) {
        //<div class="card text-white bg-info mb-6  offset-md-4" style="max-width: 20rem;">
        const principalDiv = document.createElement('div');
        principalDiv.setAttribute("class", "card bg-light mb-3 card-group");
        principalDiv.style = "min-width: 20rem;";
        principalDiv.setAttribute("name",id);
        //<div class="card-header">Formulario Tareas</div>
        const headerDiv = document.createElement('div');
        const contentDiv = document.createTextNode("Id: " + id);
        headerDiv.setAttribute("class", "card-header");
        
        headerDiv.appendChild(contentDiv);
        principalDiv.appendChild(headerDiv);
        // <div class="card-body">
        const bodyDiv = document.createElement('div');
        const pTitle = document.createElement("p");
        const pTitleText = document.createTextNode("Title: " + task.title);
        const hr = document.createElement('hr');
        const pDesc = document.createElement("p");
        const pDescText = document.createTextNode("Description: " + task.description);
        
        pTitle.appendChild(pTitleText);
        bodyDiv.appendChild(pTitle);
        bodyDiv.appendChild(hr);
        pDesc.appendChild(pDescText);
        bodyDiv.appendChild(pDesc);
        bodyDiv.appendChild(hr);

        var inputAct = document.createElement("input");
        inputAct.type = "button";
        inputAct.value = "Actualizar Tarea";
        inputAct.setAttribute("name", "update");
        inputAct.setAttribute("class","btn btn-outline-primary btn-lg")
        inputAct.setAttribute("id", id);


        bodyDiv.appendChild(inputAct);
        
        
        var input = document.createElement("input");
        input.type = "button";
        input.value = "Borrar Tarea";
        input.setAttribute("name", "delete");
        input.setAttribute("class", "btn btn-outline-danger btn-lg");
        input.setAttribute("id",id);
        bodyDiv.appendChild(input);
    
        principalDiv.appendChild(bodyDiv);

        document.body.appendChild(principalDiv);
        const br = document.createElement("br");
        document.body.appendChild(br);

    }


    export function getTasks() {
        querySnapshot.forEach((doc) => {
            createCard(doc.id, doc.data());
        });
    }
    function generateRandomIdTask(num) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < num; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    export async function insertTask(task) {
        await setDoc(doc(db, "tasks", generateRandomIdTask(20)), task);
        alert("Insertada la tarea: "+task.title);
        location.reload();
    }

    export async function deleteTask(id){
        await deleteDoc(doc(db, "tasks", id));   
        alert("Borrada la tarea: "+id);
        location.reload();
    }
    
    // export async function updateTask(id, task) {
    //     await updateDoc(doc(db, "tasks", id),task);                  FUNCIONA MAL
    //     //location.reload();
    // }

    export async function updateTask(id, task) {
        await updateDoc(doc(db, "tasks", id),task);
        alert(`Actualizada la tarea:  ${id} ${task.title} ${task.description}`)
        location.reload();
    }
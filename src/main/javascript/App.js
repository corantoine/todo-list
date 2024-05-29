import { useState } from "react";
import "./styles/app.css"
import {androidDelete} from 'react-icons-kit/ionicons/androidDelete'
import { Icon } from 'react-icons-kit'

function App() {
  // state
  const [tasks, setTasks] = useState([
    { id: 1, nom: "Lire une liste de tâches." },
    { id: 2, nom: "Ajouter une tâche en utilisant la souris ou le clavier." },
    { id: 3, nom: "Marquer une tâche comme étant terminée, en utilisant la souris ou le clavier" },
    { id: 4, nom: "Supprimer n'importe quelle tâche, en utilisant la souris ou le clavier." },
    { id: 5, nom: "Modifier n'importe quelle tâche, en utilisant la souris ou le clavier." },
    { id: 6, nom: "Afficher un sous-ensemble spécifique de tâches :" },
    { id: 7, nom: "Toutes les tâches" },
    { id: 8, nom: "Seulement la tâche active" },
    { id: 9, nom: "Seulement les tâches terminées." },
    { id: 10, nom: "Architecturer le projet" },
    { id: 11, nom: "Ajouter bouton suppression" }

  ])

  const [newTask, setNewTask] = useState("");


  // comportement
  const handleSubmit = (e) => {
    // Empêcher le rechargement de la page au moment de la soumission du form
    e.preventDefault();

    // copie du tableau task en utilisant le spread operator
    // spread operator : eclate le tableau et le reconstruit dans une nouvelle instance de tableau
    const taskCopy = [...tasks];

    const id = new Date().getTime();
    const nom = newTask;
    taskCopy.push({ id: id, nom: nom })

    setTasks(taskCopy);
  }

  const handleChange = (e) => {
    // const valueAfterChange = e.target.value;
    setNewTask(e.target.value);
  }

  const handleDelete = () => {
    // alert('Supprimer')


  }

  // render
  return (
    <div>
      <h1>Todo App</h1>
      <h2> Tâches à faire : </h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.nom}<input type="checkbox" onClick={handleDelete} /></li>
        ))}
      </ul>
      <span className="form-container">
      <form action="submit" onSubmit={handleSubmit}>
        <input className="input" value={newTask}
          type="text"
          placeholder="Ajoutez une tache..."
          onChange={handleChange} />
        <button className="button">Ajouter</button> 
        {/* <button>{androidDelete}</button> */}
      </form>
      </span>
      <h2> Tâches terminées : </h2>
    </div>
  )
}


export default App;

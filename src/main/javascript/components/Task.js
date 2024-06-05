// export default function Taches(props) {
    // const taskInfo = props.taskInfo;
    // const onTaskDelete = props.onTaskDelete;
    // const onTaskCheck = props.onTaskCheck;
// Peut aussi s'écrire comme ça (destructuring): 
// const {taskInfo, onTaskCheck, onTaskDelete} = props
// passer props en params de la fonction revient au même que de faire le destructuring directement en params de la fonction

    export default function Task({taskInfo, onTaskDelete, onCheck, onTaskCompleted}) {
    return ( 
        <li 
        className={onTaskCompleted ? "completed-task" : "uncomplete-task"}>
            {taskInfo.nom}
            <input 
            className="checkbox"
            type="checkbox"
            onChange={() => onCheck(taskInfo.id)}
            checked={taskInfo.taskCompleted}
            />            
            <button
                disabled={!onTaskCompleted}
                className="deleteButton"
                onClick={() => onTaskDelete(taskInfo.id)}>Supprimer</button>
        </li>
    )
}

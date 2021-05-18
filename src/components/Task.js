import {useState} from 'react';

function Task({task, onDelete}) {

    const [editMode, setEditMode] = useState(false);
    const [taskName, setTaskName] = useState(task.name);
    
    const toggleEditMode = () => {
        setEditMode(!editMode);
    }

    const handleChange = e => {
        setTaskName(e.target.value);
        task.name = e.target.value;
    }

    const taskInput = <input value={taskName} onChange={handleChange} type="text"/>

    return (

        <div className="task">
            <div className="task-buttons">
                <button onClick={toggleEditMode} className="btn rounded-btn edit-btn"><i className="fas fa-pencil-alt"></i></button>
                <button onClick={() => onDelete(task)} className="btn rounded-btn delete-btn"><i className="fas fa-times"></i></button>
            </div>
            <div className="task-info">
                <span>{task.number}</span>
                {editMode ? taskInput : <p>{task.name}</p>}
            </div>
        </div>
    );
}

export default Task;
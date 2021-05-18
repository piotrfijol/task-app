import Task from './Task';

function Overview(props) {
    return (
        <div className="tasks">
            <ul>
                {props.tasks.map((task, id) => 
                <li key={task.id}>
                    <Task onDelete={props.onDelete} task={task} />
                </li>)}
            </ul>
        </div>
    );
}

export default Overview;
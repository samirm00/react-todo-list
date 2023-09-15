import './Task.css';
import PropTypes from 'prop-types';

const Task = ({ task, checkHandler, deleteHandler }) => {
    return (
        <li>
            <div className={task.done ? 'done' : 'not-done'}>{task.text}</div>
            <div>
                <button className="check" onClick={() => checkHandler(task.id)}>
                    {task.done ? 'Checked' : 'Check'}
                </button>
                <button
                    className="delete"
                    onClick={() => deleteHandler(task.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    checkHandler: PropTypes.func.isRequired,
    deleteHandler: PropTypes.func.isRequired
};

export default Task;

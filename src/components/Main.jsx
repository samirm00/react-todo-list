import Form from './Form';
import TaskList from './TaskList';

import { useState } from 'react';
import './Main.css';

const Main = () => {
    const [tasks, setTasks] = useState([]);

    // add task
    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    // check task
    const checkHandler = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, done: !task.done };
                }
                return task;
            });
        });
    };

    const deleteHandler = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.filter((task) => task.id !== id);
        });
    };

    return (
        <div>
            <Form addTask={addTask} />
            <TaskList
                tasks={tasks}
                checkHandler={checkHandler}
                deleteHandler={deleteHandler}
            />
        </div>
    );
};

export default Main;

import { useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';

import './Form.css';
const Form = ({ addTask }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);

    const changeInputHandler = (e) => {
        setError(false);
        setInputValue(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // check if inputValue is empty
        if (inputValue.trim() === '') {
            setError(true);
            return;
        }

        const task = {
            id: uuid(),
            text: inputValue,
            done: false
        };
        addTask(task);
        setInputValue('');
    };

    return (
        <>
            <form onSubmit={(e) => submitHandler(e)}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => changeInputHandler(e)}
                />
                <button type="submit">Add Task</button>
            </form>
            {error && <div className="error">Please add a text</div>}
        </>
    );
};

Form.propTypes = {
    addTask: PropTypes.func.isRequired
};

export default Form;

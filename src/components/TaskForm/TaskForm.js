import { useState } from "react";
import "./taskForm.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux";

const TaskForm = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask(text));

        setText("");
    };

    return (
        <div className="taskForm">
            <form onSubmit={handleSubmit} className="addForm">
                <input
                    className="addTaskForm"
                    type="text"
                    placeholder="Ajouter une tâche"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </div>
    );
};

export default TaskForm;

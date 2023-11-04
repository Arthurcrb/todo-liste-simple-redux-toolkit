import { useSelector } from "react-redux";

const TasksHeader = () => {
    const tasks = useSelector((state) => state.todo);
    const undoneTasks = tasks.filter((t) => t.done === false);

    return (
        <div className="taskHeader">
            <h2>Todo List Perso</h2>
            <p className="numberTasks">
                Tâches à faire : <strong>{undoneTasks.length}</strong>
            </p>
        </div>
    );
};

export default TasksHeader;

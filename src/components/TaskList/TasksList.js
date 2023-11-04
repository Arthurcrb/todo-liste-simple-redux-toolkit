import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import "./taskList.css";

const TasksList = () => {
    const tasks = useSelector((state) => state.todo);
    return (
        <div className="taskList">
            {tasks.map((t) => (
                <TaskItem task={t} key={t.id} />
            ))}
        </div>
    );
};

export default TasksList;

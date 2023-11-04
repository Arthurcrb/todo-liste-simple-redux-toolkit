import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TasksHeader from "./components/TaskHeader/TasksHeader";
import TasksList from "./components/TaskList/TasksList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux";

export default function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Header />
                <div className="container">
                    <TasksHeader />
                    <TasksList />
                    <TaskForm />
                </div>
                <Footer />
            </div>
        </Provider>
    );
}

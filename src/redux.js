import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
        // addtask reçoit l'état, le state actuel qui est déjà une copie et l'action qu'on lui demande de faire)
        //l'action : {type : "ADD_TASK", payload: "Allez faire du sport"}
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload,
            };

            // on remplace l'ancien état par ce nouveau state
            state.push(newTask);
        },

        toggleTask: (state, action) => {
            //{type: "TOOGLE_TASK, payload: 20"}
            const task = state.find((t) => t.id === action.payload);
            task.done = !task.done;
        },
        deleteTask: (state, action) => {
            //{type: "DELETE_TASK", payload : 20}
            state = state.filter((t) => t.id !== action.payload);
            return state;
        },
    },
});

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;
export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
});

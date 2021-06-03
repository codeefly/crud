import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    DELETE_COMPLETED_TODO,
    RESET_TODO,
    SET_TODOLIST_FILTER,
    TOGGLE_TODO,
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE,
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    payload: text,
});



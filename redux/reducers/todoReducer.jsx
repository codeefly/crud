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
} from "../actions/actionTypes";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                },
            ];
        default:
            return state;
    }
};

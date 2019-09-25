import { TODO_TYPES } from "../actions";

export default function todos (state = [], action) {
    switch (action.type) {
        case TODO_TYPES.ADD_TODO:
            return state.concat([action.payload]);

        case TODO_TYPES.DONE_TODO:
            const newState = state.concat([]);
            const {id, comment, status} = action.payload;
            const todo = newState.find(t => t.id === id);

            todo.status = status;
            todo.comment = comment;

            return newState;
        default:
            return state;
    }
}

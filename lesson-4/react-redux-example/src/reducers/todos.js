import { TODO_TYPES } from "../actions";

export const todos = (state = [], action) => {
  switch (action.type) {
    case TODO_TYPES.ADD_TODO:
      return state.concat([
        {
          id: action.payload.id,
          description: action.payload.description,
          state: 'PENDING',
          commentState: ''
        }
      ]);
    case TODO_TYPES.DONE_TODO:
      const newState = state.map((todo) => ({...todo}));
      const todo = newState.find(todo => todo.id === action.payload.id);

      todo.state = 'DONE';
      todo.commentState = action.payload.comment;

      return newState;

    default:
      return state;
  }
}
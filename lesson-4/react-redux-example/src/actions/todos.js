export const TODO_TYPES = {
  ADD_TODO: 'ADD_TODO',
  DONE_TODO: 'DONE_TODO'
}

export const addTodo = (description) => {
  return {
    type: TODO_TYPES.ADD_TODO,
    payload: {
      id: new Date().getTime(),
      description
    }
  }
}

export const doneTodo = (id, comment) => {
  return {
    type: TODO_TYPES.DONE_TODO,
    payload: {
      id,
      comment
    }
  }
}
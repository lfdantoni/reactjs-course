export const TODO_STATUS = {
    PENDING: 'PENDING',
    DONE: 'DONE'
}

export const TODO_TYPES = {
    ADD_TODO: 'ADD_TODO',
    DONE_TODO: 'DONE_TODO'
}

export function addTodo(description) {
    return {
        type: TODO_TYPES.ADD_TODO,
        payload: {
            id: new Date().getTime(),
            description,
            status: TODO_STATUS.PENDING
        }
    }
}

export function doneTodo(id, comment) {
    return {
        type: TODO_TYPES.DONE_TODO,
        payload: {
            id,
            comment,
            status: TODO_STATUS.DONE
        }
    }
}
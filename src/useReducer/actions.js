
export const newNote = (newTodo) => ({
  type: 'add',
  payload: newTodo
})

export const deleteNote = (todoId) => ({
  type: 'delete',
  payload: todoId
})

export const toggleNote = (todoId) => ({
  type: 'toggle',
  payload: todoId
})
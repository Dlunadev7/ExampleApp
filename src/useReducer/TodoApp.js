import React, { useEffect, useReducer } from 'react'
import { deleteNote, newNote, toggleNote } from './actions';
import { useForm } from './hooks/useForm'
import { todoReducer } from './todoReducer'


const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];

};

export const TodoApp = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, [], init)

  const [ { description }, handleInputChange, reset ] = useForm({ description: '' });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if( description.trim() <= 1 ) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    
    dispatch(newNote(newTodo))

    reset()
    
  }

  const handleDelete = (todoId) => {
    dispatch(deleteNote(todoId))
  }

  const handleToggle = ( todoId ) => {
    dispatch(toggleNote(todoId))
  }

  return (
    <div className="p-5">
      <h1>TodoApp ({ todos.length }) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ol className="list-group list-group-flush">
            {
              todos.map((todo, i) => {
                return (
                  <li style={{ cursor: 'pointer' }}
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={ todo.id }
                  > 
                    <p className="text-center m-0" onClick={() => handleToggle(todo.id) }>{ i + 1 }. { todo.desc }</p>
                    <button onClick={() =>  handleDelete(todo.id) }
                            className="btn btn-danger">
                      Delete
                    </button>
                  </li>
                )
              })
            }
          </ol>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={ handleSubmit }>
            <input type="text" name="description" value={ description } className="form-control" placeholder="Aprender..." autoComplete="off" onChange={ handleInputChange } />
            <button className="btn btn-outline-primary mt-1 btn-block" onSubmit={ handleSubmit }>Agregar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

import React, { useReducer } from 'react'
import { addNumber, decrementNumber, dividetNumber, multiplyNumber } from './actions'
import { calcReducer } from './calcReducer'

export const HomeApp = () => {
  const initialState = { count: 0 }

  const [state, dispatch] = useReducer(calcReducer, initialState)

  const handleAdd = (n) => {
    dispatch(addNumber(n))
  }

  const handleDecrement = (n) => {
    dispatch(decrementNumber(n))
  }

  const handleMultiply = (n) => {
    dispatch(multiplyNumber(n))
  }

  const handleDivide = (n) => {
    dispatch(dividetNumber(n))
  }

  console.log(state.count);
  if(state.count % 2){
    console.log("Es 2");
  }

  console.log(window.location)

  return (
    <div>
      <p> { state.count } </p>
      <button className="btn btn-primary m-5" onClick={() => handleAdd(2) }>
        sumar
      </button>
      <button className="btn btn-primary m-5" onClick={() => handleDecrement(2) }>
        restar
      </button>
      <button className="btn btn-primary m-5" onClick={() => handleMultiply(2) }>
        multiplicar
      </button>
      <button className="btn btn-primary m-5" onClick={() => handleDivide(2) }>
        dividir
      </button>
    </div>
  );
}

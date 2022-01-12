

export const calcReducer = (state , action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'multiply':
      return { count: state.count * action.payload }
    case 'divide': 
    return { count: state.count / action.payload }
    default:
      return state;
  }
}
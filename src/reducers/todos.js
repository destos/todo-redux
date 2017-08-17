const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'REMOVE_TODO':
      const newState = [...state]
      for(var i = newState.length; i--;){
        if (newState[i].id === action.id) {
          newState.splice(i, 1);
        }
      }
      return newState
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos

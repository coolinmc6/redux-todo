const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      
      if (state.id !== action.id) {
        console.log('todo (single object): TOGGLE_TODO - state.id !== action.id')  
        return state
      }
      console.log('todo (single object): TOGGLE_TODO')  
      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:

      return state
  }
}

const INITIAL_STATE = [
  { id: 0, text: "Default item", completed: false },
  { id: 1, text: "Next default item", completed: false},
  { id: 2, text: "Next default item", completed: false},
  { id: 3, text: "Next default item", completed: false},
  { id: 4, text: "Next default item", completed: false}
  ]


const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      console.log('TODOS Reducer: todos (array) TOGGLE_TODO')
      return state.map(t =>
        todo(t, action)
      )
    default:
      console.log('TODOS Reducer (default): ', action)
      return state
  }
}

export default todos
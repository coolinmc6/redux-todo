let nextTodoId = 5
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  console.log('action: TOGGLE_TODO');
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
    	console.log('Visibility Filter: ', action)
      return state
  }
}

export default visibilityFilter
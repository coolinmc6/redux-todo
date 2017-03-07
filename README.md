# README

This is the Redux TodoList app from the Redux docs.

## Reducers
- Reducers are aggregated in index.js.
- There are three import statements: combineReducers from Redux and each of the reducers
for todos and visibilityFilter
- VisibilityFilter makes senses, the todos is where it gets tricky
- `/reducers/todos.js` has two functions but only one is being fed into the root reducer called
'todoApp' in `/reducers/index/js`.
  - one function, todo, deals only with single todos; the other, todos, deals with the entire array
  - You can see that in their default state values; one is an array, the other is an object.  
    - todos =>  default state is an array and deals with a list of objects
    - todo => default state is an object with todo list properties
  - When a person adds a todo, the `ADD_TODO` case is identified and what happens next is pretty
  interesting...it returns state with the spread operator (for the part of the array, nothing
  new there) but then as the second half, which would be the actual todo, it is returning the 
  results of the `todo` function
  - It is passing into that `todo` function two arguments: `undefined` (I guess because there is
  no state yet?) and the other is the action.
  - In the todo function, a switch identifies the `ADD_TODO` case and returns an object with three
  properties: id, text and completed which was not passed in but I guess it could've been
  - the `TOGGLE_TODO` case is pretty interesting as well.  When that action comes in, it maps through
  all the todos and calls the `todo` function on each one; passing in a todo object and the action.  
  It is in the `todo` function that if the todo.id == action.id then you toggle the completed property.
  This layout has each todo go through the reducer which sounds like it would not scale well
- The VisibleTodoList is the container is confusing and I am still struggling to figure it all out.  I 
am assuming that this is "clean code" but it's not easy to follow, at least how I've learned React and
Redux thus far:
  - First, the connect function is connecting the normal mapStateToProps and mapDispatchToProps but then
  connecting TodoList.  That whole connected group: mapStateToProps-mapDispatchToProps-TodoList is the
  component VisibleTodoList...and THAT is what is exported (and then inserted into App)
  - mapStateToProps is mapping the todos property of state to the result of the getVisibleTodos function.
  As that function shows, depending on what what the user has clicked (all, active or complete) is what
  the list of todos will be. 
  - mapDispatchToProps is a little bit more complicated because I haven't done any Redux without the
  React-Redux library.


  - CM -> the onTodoClick is mapped to props (and thus connected to action creators) in the VisibleTodoList
  container.  That's where the magic happens...I need to re-visit


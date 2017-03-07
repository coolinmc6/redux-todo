import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import {addTodo} from './actions'

let store = createStore(todoApp)

store.dispatch(addTodo("What's up?"))
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
  if(!hasRendered) {
    // make sure app only renders a single time
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  // If user exists, then is logged in.
  if(user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      // check if on login page, if yes, redirect to dashboard page
      if(history.location.pathname === '/') {
        history.push('/dashboard')
      }
    });
    console.log("Logged in.")
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/') // Logging out brings user to login page.
    console.log("Logged out.")
  }
})
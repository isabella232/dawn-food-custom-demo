import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

//REACT REDUX CONFIF
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/indexReducer'
import { Provider } from 'react-redux'

// DEV TOOL
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//CREATE STORE +IMPORT ALL REDUCER IN ONE
const store = createStore(rootReducer, composeEnchancer(applyMiddleware(thunk)))

//CHANGE ME IF USING NEW INDEX
window.appID = 'ZBBE3WDH7O'
window.key = '4e0ef75741d3a0942eb841f6274fb325'
window.index = 'dawn_transformed_users'

//SORTBY
window.index_asc = 'dawn_transformed_price_asc'
window.index_desc = 'dawn_transformed_price_dsc'

// QUERY SUGG
window.indexSugg = 'dawn_transformed_users_query_suggestions'

// USER ID
window.usersId = 'dawn_transformed_users'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

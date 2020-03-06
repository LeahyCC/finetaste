import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'

import App from './App'

// Master Style Import
import './assets/styles/index.scss'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  rootElement
)

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Routes from './Routes'
import superagent from 'superagent'
import { Provider } from 'react-redux'
import configureStore from './store/store'

let store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} createElement={createElement}>
      {Routes}
    </Router>
  </Provider>
    , document.getElementById('react-app'), () => {
    // We don't need the static css any more once we have launched our application.
    //const ssStyles = document.getElementById('server-side-styles')
    //ssStyles.parentNode.removeChild(ssStyles)
  })

// passing model to Root component
function createElement (Component, props) {
  return <Component {...props} />
}

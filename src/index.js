import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, } from 'react-router-dom'
import { Switch } from 'react-router'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Home from './js/pages/Home'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()

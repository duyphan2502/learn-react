import React, { Component } from 'react'
import './App.css'
import AppHeader from './js/partials/AppHeader'
import AppFooter from './js/partials/AppFooter'

class App extends Component {
  render () {
    return (
      <div className="site-wrapper">
        <AppHeader/>

        <main role="main" className="main">
          {this.props.children}
        </main>

        <AppFooter/>
      </div>
    )
  }
}

export default App

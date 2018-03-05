import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AppFooter extends Component {
  render () {
    return (
      <footer className="site-footer">
        <div className="container">
          <span className="text-muted">&copy; 2018 - Starter React</span>
        </div>
      </footer>
    )
  }
}

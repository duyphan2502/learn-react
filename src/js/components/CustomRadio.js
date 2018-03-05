import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CustomRadio extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    selectedValue: PropTypes.any,
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }))
  }

  state = {
    selectedValue: this.props.selectedValue || null,
  }

  select = choice => {
    return event => {
      this.setState((prevState, props) => {
        return {
          selectedValue: choice,
        }
      })
    }
  }

  render () {
    return (
      <div className="custom-radio-list">
        <ul>
          {
            this.props.values.map(item => {
              return (
                <li key={item.value}>
                  <label className="custom-radio">
                    <input type="radio"
                           name={this.props.name}
                           checked={item.value === this.state.selectedValue}
                           onChange={this.select(item.value)}
                           value={item.value}/>
                    <span>{item.label}</span>
                  </label>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

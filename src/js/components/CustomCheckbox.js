import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CustomCheckbox extends Component {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    }))
  }

  state = {
    values: this.props.values || [],
  }

  select = (value, index) => {
    return event => {
      this.setState((prevState, props) => {
        const values = prevState.values

        values[index].selected = !value

        return {
          values: values,
        }
      })
    }
  }

  render () {
    return (
      <div className="custom-radio-list">
        <ul>
          {
            this.props.values.map((item, index) => {
              return (
                <li key={item.value}>
                  <label className="custom-checkbox">
                    <input type="checkbox"
                           name={item.name}
                           checked={item.selected}
                           onChange={this.select(item.selected, index)}
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

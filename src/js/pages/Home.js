import React, { Component } from 'react';
import CustomRadio from '../components/CustomRadio'
import CustomCheckbox from '../components/CustomCheckbox'

export default class Home extends Component {
  render() {
    const valuesForCheckbox = [
      {
        label: 'A',
        value: 'a',
        name: 'test',
        selected: false,
      }
    ]

    const valuesForRadio = {
      name: 'name',
      values: [
        {
          label: 'Test',
          value: 1,
        },
        {
          label: 'Test 2',
          value: 2,
        }
      ],
      selectedValue: null,
    }

    return (
      <div className="container d-flex flex-column flex-nowrap h-100 justify-content-center">
        <CustomCheckbox values={valuesForCheckbox}/>
        <CustomRadio {...valuesForRadio} name="value_1"/>
      </div>
    )
  }
}

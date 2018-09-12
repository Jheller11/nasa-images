import React from 'react'
import Input from './Input'

import { shallow } from 'enzyme'

describe('Input Component', () => {
  it('renders the input', () => {
    const input = shallow(<Input />)
    const div = input.find('div')
    expect(div.length).toEqual(1)
  })

  it('accepts props', () => {
    const props = {
      name: 'q',
      label: 'Free Text',
      description: 'Search by all fields.'
    }
    const input = shallow(<Input {...props} />)
    const label = input.find('label')
    expect(label.length).toEqual(1)
    expect(label.text()).toMatch(props.label)
    const span = input.find('span')
    expect(span.length).toEqual(1)
    expect(span.text()).toMatch(`(${props.description})`)
    const htmlInput = input.find('input')
    expect(htmlInput.length).toEqual(1)
  })
})

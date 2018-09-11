import React from 'react'
import { mount } from 'enzyme'
import Error from './Error'

describe('Error', () => {
  let props
  let mountedError
  const error = () => {
    if (!mountedError) {
      mountedError = mount(<Error {...props} />)
    }
    return mountedError
  }

  beforeEach(() => {
    props = {
      error: undefined
    }
    mountedError = undefined
  })

  //   Tests Here:
  it('always renders a div', () => {
    const divs = error().find('div')
    expect(divs.length).toBeGreaterThan(0)
  })

  it('renders an error prop', () => {
    props.error = 'Testing error.'
    const paragraph = error().find('p')
    expect(paragraph.contains('Testing error.')).toEqual(true)
  })
})

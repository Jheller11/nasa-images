import React from 'react'
import Header from './Header'

import { shallow } from 'enzyme'

describe('Header Component', () => {
  it('renders a header', () => {
    const header = shallow(<Header />)
    const myHeader = header.find('header')
    expect(myHeader.length).toEqual(1)
  })

  it('renders a nav', () => {
    const header = shallow(<Header />)
    const nav = header.find('nav')
    expect(nav.length).toBeGreaterThan(0)
  })
})

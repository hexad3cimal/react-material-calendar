import React from 'react'
import { mount } from 'enzyme'
import Month from './Month'

describe('Month component test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Month month='1' year='2020' selectedDays={[3, 4, 10]} />)
  })
  it('renders container', () => {
    expect(wrapper.find('Day').length).toBe(35)
    expect(wrapper.find('Day').at(34).text()).toBe('29')
  })
})

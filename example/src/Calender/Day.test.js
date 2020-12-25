import React from 'react'
import { mount } from 'enzyme'
import Day from './Day'

describe('Day component test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Day data={{ selected: false, date: 12 }} />)
  })
  it('renders container', () => {
    expect(wrapper.find('Day').length).toBe(1)
    expect(wrapper.find('td').length).toBe(1)
  })

  it('has proper date', () => {
    expect(wrapper.find('td').text()).toBe('12')
  })

  it('has proper classes when selected is true', () => {
    wrapper = mount(<Day data={{ selected: true, date: 12 }} />)
    expect(wrapper.find('td').hasClass('makeStyles-selected-1')).toBe(true)
  })

  it('onclick should work when selected', () => {
    const click = jest.fn()
    wrapper = mount(<Day data={{ selected: true, date: 12 }} onClick={click} />)
    wrapper.find('td').simulate('click')
    expect(click).toBeCalled()
  })

  it('onclick should work when not selected', () => {
    const click = jest.fn()
    wrapper = mount(
      <Day data={{ selected: false, date: 12 }} onClick={click} />
    )
    wrapper.find('td').simulate('click')
    expect(click).toBeCalled()
  })

  it('test tool should be there when there is info prop', () => {
    wrapper = mount(<Day data={{ selected: false, date: 12, info: 'hello' }} />)
    expect(wrapper.find({ title: 'hello', arrow: true }).length).toBe(2)
  })

  it('test tool should not be there when there is no info prop', () => {
    expect(wrapper.find({ title: 'hello', arrow: true }).length).toBe(0)
  })
})

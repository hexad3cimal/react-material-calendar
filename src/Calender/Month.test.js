import React from 'react'
import { mount } from 'enzyme'
import Month from './Month'
import { act } from 'react-dom/test-utils'

describe('Month component test', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Month month='01' year='2020' selectedDays={[3, 4, 10]} />)
  })
  it('renders container', () => {
    expect(wrapper.find('Month').length).toBe(1)
    expect(wrapper.find('Day').length).toBe(34)
    expect(wrapper.find('Day').at(33).text()).toBe('31')
  })

  it('should trigger onSelect on click of week pre-selected', () => {
    const setDate = jest.fn()
    wrapper = mount(
      <Month
        month='1'
        year='2020'
        setDates={setDate}
        selectedDays={[
          { 3: { info: 'testing', color: 'red' } },
          { 8: { info: 'testing2' } }
        ]}
      />
    )
    act(() => {
      wrapper.find('Week').prop('onClick')(3)
    })
    expect(setDate).toBeCalledWith([{ 8: { info: 'testing2' } }])
  })

  it('should trigger onSelect on click of week [non selected day]', () => {
    const setDate = jest.fn()
    wrapper = mount(
      <Month
        month='1'
        year='2020'
        setDates={setDate}
        selectedDays={[
          { 3: { info: 'testing', color: 'red' } },
          { 8: { info: 'testing2' } }
        ]}
      />
    )
    act(() => {
      wrapper.find('Week').prop('onClick')(6)
    })
    expect(setDate).toBeCalledWith([
      { 3: { info: 'testing', color: 'red' } },
      { 8: { info: 'testing2' } },
      { 6: { info: ' ' } }
    ])
  })
})

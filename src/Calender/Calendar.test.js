import React from 'react'
import { mount } from 'enzyme'
import { Calendar } from './Calendar'
import { act } from 'react-dom/test-utils'

describe('Calendar component test', () => {
  let wrapper, getSelectedDays

  beforeEach(() => {
    getSelectedDays = jest.fn()
    wrapper = mount(
      <Calendar
        month={4}
        title='Calendar'
        getSelectedDays={getSelectedDays}
        year={2020}
        selectedDays={{
          '2020-4': [
            { 3: { info: 'testing', color: 'red' } },
            { 8: { info: 'testing2' } }
          ]
        }}
      />
    )
  })
  it('renders container', () => {
    expect(wrapper.find('Calendar').length).toBe(1)
  })
  it('should call getSelectedDays when days are clicked', () => {
    act(() => {
      wrapper.find('Day').at(10).prop('onClick')(10)
    })
    expect(getSelectedDays).toBeCalledWith({
      '2020-4': [
        { 3: { color: 'red', info: 'testing' } },
        { 8: { info: 'testing2' } },
        { 10: { info: ' ' } }
      ]
    })
  })
  it('should show next month when clicked', () => {
    act(() => {
      wrapper.find('.MuiButton-label').at(2).simulate('click')
    })
    expect(wrapper.find('.MuiButton-label').at(0).text()).toBe('May-2020')
  })

  it('should show previous month when clicked', () => {
    act(() => {
      wrapper.find('.MuiButton-label').at(1).simulate('click')
    })
    expect(wrapper.find('.MuiButton-label').at(0).text()).toBe('Mar-2020')
  })
})

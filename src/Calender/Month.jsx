import React from 'react'
import Week from './Week'

const isSelected = (date, selectedDays) => {
  let selectedDate
  selectedDays &&
    selectedDays.forEach((daysObject) => {
      for (const day in daysObject) {
        if (parseInt(day) === date) selectedDate = daysObject[date]
      }
    })
  return selectedDate
}
const getDays = (month, year, selectedDays) => {
  const firstDayOfMonth = new Date(year, month).getDay()
  const noOfDaysInMonth = 32 - new Date(year, month, 32).getDate()
  const days = []
  let date = 1
  for (let i = 0; i < 6; i++) {
    const dates = []
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        dates.push({ date: '', selected: false })
      } else if (date > noOfDaysInMonth) {
        break
      } else {
        const selectedDate = isSelected(date, selectedDays)
        if (selectedDate) {
          dates.push({
            date: date,
            selected: true,
            info: selectedDate.info,
            color: selectedDate.color
          })
        } else {
          dates.push({ date: date, selected: false })
        }
        date++
      }
    }
    days.push(dates)
  }
  return days
}

const Month = (props) => {
  const selectedDays = props.selectedDays || []
  const dates = getDays(props.month, props.year, props.selectedDays)
  const onSelect = (date) => {
    if (!JSON.stringify(selectedDays).includes('{"' + date)) {
      selectedDays.push({ [date]: { info: ' ' } })
      props.setDates(selectedDays)
    } else {
      const index = selectedDays.findIndex((day) => {
        if (Object.keys(day)[0] === String(date)) {
          return true
        }
      })
      selectedDays.splice(index, 1)
      props.setDates(selectedDays)
    }
  }
  return <Week rows={dates} onClick={onSelect} />
}

export default Month

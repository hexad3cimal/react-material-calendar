import React from 'react'
import Week from './Week'
import { SelectedDayProps } from "./Calendar";
export interface IDay extends SelectedDayProps{
  date : number | string;
}
const isSelected = (date : number, selectedDays:Array<Record<string, SelectedDayProps>>) : SelectedDayProps | undefined => {
  let selectedDate : SelectedDayProps | undefined = undefined;
    selectedDays?.forEach((daysObject) => {
      for (const day in daysObject) {
        if (parseInt(day) === date) selectedDate = daysObject[date]
      }
    })

  return selectedDate;
}
const getDays = (month :number, year: number, selectedDays : Array<Record<string, SelectedDayProps>> ) => {
  const firstDayOfMonth = new Date(year, month - 1).getDay()
  const noOfDaysInMonth = 32 - new Date(year, month - 1, 32).getDate()
  const days : Array<Array<IDay>> = [];
  let date = 1
  for (let i = 0; i < 6; i++) {
    const dates : Array<IDay> = []
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

interface MonthProps{
  selectedDays: Array<Record<string, SelectedDayProps>>;
  month: number;
  year: number;
  selectColor?: string;
  setDates: (date: Array<Record<string, SelectedDayProps>>) => void
}
const Month = (props: MonthProps) => {
  const selectedDays = props.selectedDays || []
  const dates = getDays(props.month, props.year, props.selectedDays)
  const onSelect = (date : string | number) => {
    if (!JSON.stringify(selectedDays).includes('{"' + date)) {
      selectedDays.push({ [date]: { info: ' ' } })
      props.setDates(selectedDays)
    } else {
      const index = selectedDays.findIndex((day) => {
        return Object.keys(day)[0] === String(date)
      })
      selectedDays.splice(index, 1)
      props.setDates(selectedDays)
    }
  }
  return <Week rows={dates} onClick={onSelect} selectColor={props.selectColor}/>
}

export default Month

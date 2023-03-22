import React, { useState } from "react";
import Month from './Month'

import { getMonths, getWeekDays, getYears } from '../utils/helper'
import  Card  from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import ArrowLeft  from "@mui/icons-material/ArrowLeft";
import  ArrowRight  from "@mui/icons-material/ArrowRight";
import  Divider  from "@mui/material/Divider";

export interface SelectedDayProps{
  info?: string
  color?: string
  selected?: boolean
}

export interface CalendarProps{
  selectedDays?: Record<string, Array<Record<string, SelectedDayProps>>>;
  month? : number;
  year?: number;
  startYear?: number;
  yearLimit?: number;

  title? : string
  selectColor? : string
  locale? : string

  getSelectedDays?: (days?: Record<string, Array<Record<string, SelectedDayProps>>>) => void
}
export const Calendar = ({selectedDays, year, selectColor, title, month, getSelectedDays, locale, startYear, yearLimit} : CalendarProps) => {
  const [calenderProps, setProps] = useState({
    selectedDays,
    month: month || new Date().getMonth() + 1,
    year: year || new Date().getFullYear(),
    title: title
  })

  const nextMonth = () => {
    const currentYear =
      calenderProps.month === 12 ? calenderProps.year + 1 : calenderProps.year
    const currentMonth =
      calenderProps.month === 12
        ? (calenderProps.month = 1)
        : calenderProps.month + 1

    setProps({
      ...calenderProps,
      month: currentMonth,
      year: currentYear
    })
  }

  const previousMonth = () => {
    const currentYear =
      calenderProps.month === 1 ? calenderProps.year - 1 : calenderProps.year
    const currentMonth =
      calenderProps.month === 1 ? 12 : calenderProps.month - 1
    setProps({
      ...calenderProps,
      month: currentMonth,
      year: currentYear
    })
  }

  const setDates = (date : Array<Record<string, SelectedDayProps>>) => {
    const key = calenderProps.year + '-' + calenderProps.month
    const selectedDatesInCurrentMonth = {...calenderProps.selectedDays, [key]:date}
    setProps({
      ...calenderProps,
      selectedDays: selectedDatesInCurrentMonth
    })

    if (getSelectedDays) {
      getSelectedDays(calenderProps.selectedDays)
    }
  }

  const handleYearChange = (event : SelectChangeEvent<number>) => {
    setProps({
      ...calenderProps,
      year: Number(event.target.value)
    })
  }
  const handleMonthChange = (event: SelectChangeEvent<number>) => {
    setProps({
      ...calenderProps,
      month: Number(event.target.value)
    })
  }
  const days = getWeekDays(locale || 'en-US')
  const months = getMonths(locale || 'en-US')
  const years = getYears(
    startYear || new Date().getUTCFullYear(),
    yearLimit || 50
  )
  return (
    <Card>
      <CardHeader title={calenderProps.title} />
      <Divider />
      <CardActions>
        <FormControl variant='outlined'>
          <InputLabel>Year</InputLabel>
          <Select
            value={calenderProps.year}
            onChange={handleYearChange}
            label='Select Year'
          >
            {years &&
              years.map((year) => {
                return (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                )
              })}
          </Select>
        </FormControl>
        <FormControl variant='outlined'>
          <InputLabel>Month</InputLabel>
          <Select
            value={calenderProps.month}
            onChange={handleMonthChange}
            label='Select Month'
          >
            {months?.map((month, index) => {
                return (
                  <MenuItem key={month} value={index + 1}>
                    {month}
                  </MenuItem>
                )
              })}
          </Select>
        </FormControl>
      </CardActions>
      <Divider />
      <CardContent>
        <TableContainer component={Paper}>
          <Table  aria-label='calender'>
            <TableHead>
              <TableRow>
                {days?.map((day) => {
                  return <TableCell key={day}>{day}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              <Month
                month={calenderProps.month}
                year={calenderProps.year}
                setDates={setDates}
                selectColor={selectColor}
                selectedDays={
                  calenderProps.selectedDays?.[
                    calenderProps.year + '-' + calenderProps.month
                  ]
                }
              />
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color='primary'
          size='small'
          variant='text'
          onClick={() => previousMonth()}
          className='button'
        >
          <ArrowLeft />
          Previous
        </Button>
        <Button
          color='primary'
          size='small'
          variant='text'
          onClick={() => nextMonth()}
          className='button'
        >
          Next <ArrowRight />
        </Button>
      </CardActions>
    </Card>
  )
}

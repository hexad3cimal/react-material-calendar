import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  CardActions,
  Button,
  makeStyles,
  TableHead,
  TableCell,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import Month from './Month'
import Paper from '@material-ui/core/Paper'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import TableRow from '@material-ui/core/TableRow'
import { getMonths, getWeekDays, getYears } from '../utils/helper'

const useStyles = makeStyles(() => ({
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: { display: 'unset' }
}))

export const Calendar = (props) => {
  const [calenderProps, setProps] = useState({
    selectedDays: props.selectedDays,
    month: props.month || new Date().getMonth() + 1,
    year: props.year || new Date().getFullYear(),
    title: props.title
  })

  const classes = useStyles()
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

  const setDates = (date) => {
    const key = calenderProps.year + '-' + parseInt(calenderProps.month)
    const selectedDatesInCurrentMonth = calenderProps.selectedDays
    selectedDatesInCurrentMonth[key] = date
    setProps({
      ...calenderProps,
      selectedDays: selectedDatesInCurrentMonth
    })

    props.getSelectedDays(calenderProps.selectedDays)
  }

  const handleYearChange = (event) => {
    setProps({
      ...calenderProps,
      year: event.target.value
    })
  }
  const handleMonthChange = (event) => {
    setProps({
      ...calenderProps,
      month: event.target.value
    })
  }
  const days =
    getWeekDays(props.locale ||'en-US')
  const months = (getMonths(props.locale || 'en-US'))
  const years = getYears(props.startYear || new Date().getUTCFullYear(),
  props.yearLimit || 50)
  return (
    <Card>
      <CardHeader title={calenderProps.title}>

      </CardHeader>
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
            {months &&
            months.map((month,index) => {
              return (
                <MenuItem key={month} value={index+1}>
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
          <Table className={classes.table} aria-label='calender'>
            <TableHead>
              <TableRow>
                {days.map((day) => {
                  return <TableCell key={day}>{day}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              <Month
                month={calenderProps.month}
                year={calenderProps.year}
                setDates={setDates}
                selectedDays={
                  calenderProps.selectedDays[
                    calenderProps.year + '-' + parseInt(calenderProps.month)
                  ]
                }
              />
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color='primary'
          size='small'
          variant='text'
          onClick={() => previousMonth()}
          className='button'
        >
          <ArrowLeftIcon />
          Previous
        </Button>
        <Button
          color='primary'
          size='small'
          variant='text'
          onClick={() => nextMonth()}
          className='button'
        >
          Next <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  )
}

Calendar.propTypes = {
  className: PropTypes.string
}

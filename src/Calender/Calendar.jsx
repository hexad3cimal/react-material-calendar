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
  TableCell
} from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import Month from './Month'
import Paper from '@material-ui/core/Paper'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import TableRow from '@material-ui/core/TableRow'

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
    month: props.month,
    year: props.year,
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

  const months = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const days = props.days || [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return (
    <Card>
      <CardHeader
        action={
          <Button size='small' variant='text'>
            {months[calenderProps.month]}-{calenderProps.year}
          </Button>
        }
        title={calenderProps.title}
      />
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

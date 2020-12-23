import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import Day from './Day'

const Week = (props) => {
  return (
    props &&
    props.rows.map((row) => {
      return (
        <TableRow>
          {row.map((date) => {
            return <Day onClick={props.onClick} data={date} />
          })}
        </TableRow>
      )
    })
  )
}

export default Week

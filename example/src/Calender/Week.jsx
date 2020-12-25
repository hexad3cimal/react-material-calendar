import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import { v4 as uuid } from 'uuid'
import Day from './Day'

const Week = (props) => {
  return (
    props &&
    props.rows.map((row) => {
      return (
        <TableRow key={uuid()}>
          {row.map((date) => {
            return <Day key={uuid()} onClick={props.onClick} data={date} />
          })}
        </TableRow>
      )
    })
  )
}

export default Week

import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles({
  selected: {
    background: '#007cff',
    fontColor: 'white'
  }
})
const Day = (props) => {
  const classes = useStyles()

  return props.data.selected === true ? (
    <Tooltip title={props.data.info} arrow>
      <TableCell
        style={{ background: props.data.color }}
        className={props.data.selected === true ? classes.selected : null}
        onClick={() => {
          props.onClick(props.data.date)
        }}
      >
        {props.data.date}
      </TableCell>
    </Tooltip>
  ) : (
    <TableCell
      style={{ background: props.data.color }}
      className={props.data.selected === true ? classes.selected : null}
      onClick={() => {
        props.onClick(props.data.date)
      }}
    >
      {props.data.date}
    </TableCell>
  )
}

export default Day

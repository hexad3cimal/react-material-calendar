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
  return props.data.info ? (
    <Tooltip title={props.data.info} arrow>
      {getContent(props)}
    </Tooltip>
  ) : (
    getContent(props)
  )
}

const getContent = (props) => {
  const classes = useStyles()

  return props.data.selected === true ? (
    <TableCell
      style={{ background: props.data.color }}
      className={props.data.selected === true ? classes.selected : null}
      onClick={() => {
        props.onClick(props.data.date)
      }}
    >
      {props.data.date}
    </TableCell>
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

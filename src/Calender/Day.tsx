import React from 'react'
import Tooltip  from "@mui/material/Tooltip";
import TableCell  from "@mui/material/TableCell";
import { IDay } from "./Month";

interface DayProps{
  data : IDay,
  selectColor?: string
  onClick : (date: number | string) => void
}
const Day = ({data, onClick,selectColor}: DayProps) => {
  return data?.info?.length ? (
    <Tooltip title={data.info} arrow>
      {getContent({data, onClick,selectColor})}
    </Tooltip>
  ) : (
    getContent({data, onClick,selectColor})
  )
}

const getContent = ({data, onClick, selectColor}: DayProps) => {
  return data.selected === true ? (
    <TableCell
      style={{ ...(selectColor ? {background : selectColor} : {background: data.color})}}
      onClick={() => {
        onClick(data.date)
      }}
    >
      {data.date}
    </TableCell>
  ) : (
    <TableCell
      style={{ background: data.color}}
      onClick={() => {
        onClick(data.date)
      }}
    >
      {data.date}
    </TableCell>
  )
}
export default Day

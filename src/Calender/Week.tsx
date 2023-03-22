import React from 'react'
import { v4 as uuid } from 'uuid'
import Day from './Day'
import TableRow from "@mui/material/TableRow";
import { IDay } from "./Month";

interface WeekProps{
  rows : Array<Array<IDay>>;
  selectColor?: string
  onClick: (date: string | number) => void
}
const Week = ({rows,  onClick, selectColor} : WeekProps) => {
  return(
  <>
    {rows?.map((row) => {
      return (
        <TableRow key={uuid()}>
          {row.map((date) => {
            return <Day key={uuid()} selectColor={selectColor} onClick={onClick} data={date} />
          })}
        </TableRow>
      )
    })}
    </>)
}

export default Week

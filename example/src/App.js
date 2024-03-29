import React from 'react';
import {Calendar} from 'react-material-event-calendar'

function App() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const getSelectedDays = (days) => {
      console.log(days)
  }
  return (
    <div className="App">
      <header className="App-header">
      <Calendar selectColor={'red'} month={currentMonth} title="Calendar" getSelectedDays={getSelectedDays} year={currentYear} selectedDays={ {'2020-5': [{ '3': { 'info': 'testing' ,color:'red' } }, {'8': { 'info': 'testing2' }}] }} />
      </header>
    </div>
  );
}

export default App;

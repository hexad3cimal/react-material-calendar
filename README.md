# React material event calendar

[![codecov](https://codecov.io/gh/hexad3cimal/react-material-calendar/branch/master/graph/badge.svg)](https://codecov.io/gh/hexad3cimal/react-material-calendar)



    Simple calendar component based on @material-ui/core


## Installation


```bash
npm i react-material-event-calendar

"peerDependencies": {
  "@material-ui/core"
   "@material-ui/icons"
 }

```

## Usage

```nodejs
import Calendar from 'react-material-event-calendar'

function App() {

//selected days will be available here
 const getSelectedDays = (days) => {
      console.log(days)
  }
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
      <Calendar month={currentMonth} title="Calendar" getSelectedDays={getSelectedDays} year={currentYear} selectedDays={ {'2020-5': [{ '3': { 'info': 'testing', color :'red' } }, {'8': { 'info': 'testing2' }}] }} />
      </header>
    </div>
  );
}

# You can pass the callback function on date select via getSelectedDays.
# List of preselected days can be passed via selectedDays ( you can pass month and dates as in example above )
  info refers to tool tip to be show and color refers to background color( default is blue).
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

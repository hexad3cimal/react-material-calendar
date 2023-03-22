# React material event calendar

[![codecov](https://codecov.io/gh/hexad3cimal/react-material-calendar/branch/master/graph/badge.svg)](https://codecov.io/gh/hexad3cimal/react-material-calendar)



    Simple calendar component based on @material-ui/core
## Changes in 0.3.2
- Unselect date option
- Can use custom day names
- Other performance fixes

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

```

### Options

Currently, these options can be passed to the module

| Property | Description | Sample value
| ------ | ------ | ------ |
| title | Title of the component | calendar |
| days | You can pass in your custom day names as an array (By default it is english day names) | ['Sunday', 'Monday'...] |
| month | Initial month(MM) that has to shown when module renders | 10 or 04 |
| year |  Initial year that(YYYY) has to shown when module renders | 2020 |
| getSelectedDays | callback function to receive date changes | (dates) => {} |
| selectedDays | Here you can pass the dates which needs to be shown as preselected,   info refers to tool tip to be shown and color refers to background color( default is blue).| {'2020-5': [{ '3': { 'info': 'testing', color :'red' } }]} |


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

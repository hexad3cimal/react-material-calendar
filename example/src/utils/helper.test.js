import { getMonths, getYears, getWeekDays } from './helper'

describe('helper test', () => {
  it('getMonths should return 12 months', () => {
    expect(getMonths('en-US')).toStrictEqual([
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ])
  })

  it('getMonths should return 12 months on different locale', () => {
    expect(getMonths('de-DE')).toStrictEqual([
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember'
    ])
  })

  it('getYears should return current years', () => {
    const startYear = new Date().getUTCFullYear()

    expect(getYears(startYear, 2)).toStrictEqual([2020, 2019])
  })
  it('getWeekDays should return weekdays', () => {
    expect(getWeekDays('en-US')).toStrictEqual([
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ])
  })
  it('getWeekDays should return weekdays when other locale is used', () => {
    expect(getWeekDays('de-DE')).toStrictEqual([
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag'
    ])
  })
})

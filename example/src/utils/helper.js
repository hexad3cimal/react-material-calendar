export const getYears = (startYear, limit) => {
  return Array(startYear - (startYear - limit))
    .fill('')
    .map((value, year) => startYear - year)
}

export const getMonths = (locale) => {
  return Array.from(Array(12), (e, i) =>
    new Date(25e8 * ++i).toLocaleDateString(locale, { month: 'long' })
  )
}

export const getWeekDays = (locale) => {
  const baseDate = new Date(Date.UTC(2017, 0, 1))
  const weekDays = []
  for (let i = 0; i < 7; i++) {
    weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'long' }))
    baseDate.setDate(baseDate.getDate() + 1)
  }
  return weekDays
}

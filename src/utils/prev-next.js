const weeklyCalendarHelper = require('weekly-calendar-helper')

function getPrevNext(filterCalendar) {
  const firstWeek = filterCalendar.weeks[0]
  let firstWeekFirstDay = new Date(firstWeek.days[0].date)
  firstWeekFirstDay.setHours(0, 0, 0, 0)
  firstWeekFirstDay.setDate(firstWeekFirstDay.getDate() - 1)

  let previousWeekLastDay = new Date(firstWeekFirstDay)
  previousWeekLastDay.setHours(0, 0, 0, 0)
  const previousMonth = {
    week: weeklyCalendarHelper.weekHelper.getWeekNumber(previousWeekLastDay),
    year: previousWeekLastDay.getFullYear(),
  }

  const lastWeek = filterCalendar.weeks[filterCalendar.weeks.length - 1]
  let lastWeekFirstDay = new Date(lastWeek.days[lastWeek.days.length - 1].date)
  lastWeekFirstDay.setHours(0, 0, 0, 0)
  lastWeekFirstDay.setDate(lastWeekFirstDay.getDate() + 1)

  let nextWeekFirstDay = new Date(lastWeekFirstDay)
  nextWeekFirstDay.setHours(0, 0, 0, 0)
  const nextMonth = {
    week: weeklyCalendarHelper.weekHelper.getWeekNumber(nextWeekFirstDay),
    year: nextWeekFirstDay.getFullYear(),
  }

  return { previousMonth, nextMonth }
}

function getCurrentMonth(week, year) {
  if (!week || !year) {
    return ''
  }
  return weeklyCalendarHelper.baseHelper.getMonthName(
    weeklyCalendarHelper.weekHelper.getMonthFromWeek(week, year)
  )
}

export { getPrevNext, getCurrentMonth }

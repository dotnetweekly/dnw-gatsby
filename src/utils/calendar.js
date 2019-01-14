const monthNames = [
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
  'December',
]

const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]
const monthDays = [
  '31',
  '28',
  '31',
  '30',
  '31',
  '30',
  '31',
  '31',
  '30',
  '31',
  '30',
  '31',
]

const getMonthName = function(number) {
  return monthNames[number]
}

const getDayName = function(number) {
  return dayNames[number]
}

const getWeek = function(dateValue) {
  let target = new Date(dateValue)
  target.setHours(0, 0, 0, 0)
  const dayNr = (target.getDay() + 6) % 7
  target.setDate(target.getDate() - dayNr + 3)
  const firstThursday = target.valueOf()

  target.setMonth(0, 1)
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7))
  }

  return 1 + Math.ceil((firstThursday - target) / 604800000)
}

const getUtcNow = function() {
  const now = new Date(Date.now())
  return new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds()
  )
}

const getFebruaryDays = function(dateValue) {
  let date = new Date(dateValue)
  date.setHours(0, 0, 0, 0)
  if (date.getMonth() === 1) {
    if (
      (date.getFullYear() % 100 !== 0 && date.getFullYear() % 4 === 0) ||
      date.getFullYear() % 400 === 0
    ) {
      return 29
    } else {
      return 28
    }
  }
}

const getMonthFromWeek = function(week, year) {
  let date = new Date(year, 0, 1)
  date.setHours(0, 0, 0, -1)
  date.setDate(date.getDate() + week * 7)
  return date.getMonth()
}

const getCalendar = function(setWeek, setYear) {
  let dateNow = new Date(setYear, getMonthFromWeek(setWeek, setYear), 1)
  dateNow.setHours(0, 0, 0, 0)
  const dayPerMonth = monthDays
  dayPerMonth[1] = getFebruaryDays(dateNow)

  let counter = 1
  const month = dateNow.getMonth()
  const year = dateNow.getFullYear()
  let firstDay = new Date(year, month, counter)
  firstDay.setHours(0, 0, 0, 0)

  let weekdays = firstDay.getDay() - 1
  let weekdays2 = weekdays === -1 ? 0 : weekdays

  const numOfDays = dayPerMonth[month]
  let lastDayCounted = dateNow

  let lastDay = firstDay
  const weeks = []
  let week = []

  try {
    if (weekdays === -1) {
      weekdays = 6
    }

    while (weekdays > 0) {
      firstDay.setDate(firstDay.getDate() - 1)
      let currentFirstDay = new Date(firstDay)
      currentFirstDay.setHours(0, 0, 0, 0)
      week.push({
        date: currentFirstDay,
        week: getWeek(firstDay),
        inPast: true,
      })

      weekdays--
    }

    week.reverse()

    weekdays2 = week.length

    while (counter <= numOfDays) {
      if (weekdays2 > 6) {
        weekdays2 = 0
        weeks.push({
          days: week,
          week: getWeek(week[0].date),
          year: week[0].date.getFullYear(),
        })
        week = []
      }

      let newDay = new Date(year, month, counter)
      newDay.setHours(0, 0, 0, 0)
      week.push({
        date: newDay,
        week: getWeek(newDay),
      })

      lastDayCounted = new Date(newDay)
      lastDayCounted.setHours(0, 0, 0, 0)

      weekdays2++
      counter++
    }

    lastDayCounted.setDate(lastDayCounted.getDate() + 1)
    lastDay = new Date(lastDayCounted)
    const daysRemaining = 7 - week.length - 1

    for (var i = 0; i <= daysRemaining; i++) {
      week.push({
        date: new Date(lastDay),
        week: getWeek(lastDay),
        inFuture: true,
      })
      lastDay.setDate(lastDay.getDate() + 1)
    }

    weeks.push({
      days: week,
      week: getWeek(week[0].date),
      year: week[0].date.getFullYear(),
      inFuture: true,
    })
  } catch (error) {
    console.log(error)
  }

  return {
    weeks,
    month,
    firstDay,
    lastDay,
  }
}

const getDateRangeOfWeek = function(week, year) {
  let date = new Date(year, 0, 1)
  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + week * 7)

  let fromDate = new Date(date.setDate(date.getDate() - 6))
  fromDate.setHours(0, 0, 0, 0)

  let toDate = new Date(date.setDate(date.getDate() + 6))
  toDate.setHours(0, 0, 0, 0)

  const dateRange = {
    from: fromDate,
    to: toDate,
  }
  return dateRange
}

function addDays(currDate, days) {
  let date = new Date(currDate.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

function getDates(startDate, stopDate) {
  let dateArray = []
  let currentDate = startDate
  let count = 0
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate))
    currentDate = addDays(currentDate, 1)
    count++
    if (count > 32) {
      break
    }
  }
  return dateArray
}

function getWeekNumber(d) {
  // Copy date so don't modify original
  d = new Date(+d)
  d.setHours(0, 0, 0)
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setDate(d.getDate() + 4 - (d.getDay() || 7))
  // Get first day of year
  var yearStart = new Date(d.getFullYear(), 0, 1)
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
  // Return array of year and week number
  return [d.getFullYear(), weekNo]
}

function weeksInYear(year) {
  var month = 11,
    day = 31,
    week

  // Find week that 31 Dec is in. If is first week, reduce date until
  // get previous week.
  let d
  do {
    d = new Date(year, month, day--)
    week = getWeekNumber(d)[1]
  } while (week === 1)

  return week
}

module.exports = {
  getWeek,
  getMonthName,
  getFebruaryDays,
  getMonthFromWeek,
  getCalendar,
  getDayName,
  getDateRangeOfWeek,
  getDates,
  getUtcNow,
  getWeekNumber,
  weeksInYear,
}

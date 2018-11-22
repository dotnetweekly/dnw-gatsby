import React from 'react'
import * as calendarHelper from '../utils/calendar'
import * as prevNext from '../utils/prev-next'
import { Link } from '@reach/router'

class Calendar extends React.Component {
  getCalendarHeader() {
    return (
      <tr>
        <td>Week</td>
        <td>M</td>
        <td>T</td>
        <td>W</td>
        <td>T</td>
        <td>F</td>
        <td>S</td>
        <td>S</td>
      </tr>
    )
  }
  getPrevNext(week, year, filterCalendar) {
    const pn = prevNext.getPrevNext(filterCalendar)
    return (
      <tr>
        <td>
          <Link
            to={`/week/${pn.previousMonth.week}/year/${pn.previousMonth.year}`}
          >
            Prev
          </Link>
        </td>
        <td colSpan="6">
          {prevNext.getCurrentMonth(week, year)} {year}
        </td>
        <td>
          <Link to={`/week/${pn.nextMonth.week}/year/${pn.nextMonth.year}`}>
            Next
          </Link>
        </td>
      </tr>
    )
  }
  render() {
    const { week, year } = this.props
    const filterCalendar = calendarHelper.getCalendar(week, year)

    return (
      <table className="dnwCalendar">
        <tbody>
          {this.getPrevNext(week, year, filterCalendar)}
          {this.getCalendarHeader()}
          {filterCalendar.weeks.map((calendarWeek, indexWeek) => {
            return (
              <tr key={`week-${indexWeek}`}>
                <td>{calendarWeek.week}</td>
                {calendarWeek.days.map((weekDay, indexDay) => {
                  return (
                    <td key={`day-${indexDay}`}>
                      <span>
                        <Link
                          to={`/week/${
                            calendarWeek.week
                          }/year/${weekDay.date.getFullYear()}`}
                        >
                          {weekDay.date ? weekDay.date.getDate() : ''}
                        </Link>
                      </span>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Calendar

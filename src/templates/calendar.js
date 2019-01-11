import React from 'react'
import * as calendarHelper from '../utils/calendar'
import * as prevNext from '../utils/prev-next'
import { Link } from '@reach/router'

class Calendar extends React.Component {
  getCalendarHeader() {
    return (
      <tr>
        <td>W</td>
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
    const currentWeek = calendarHelper.getWeek(calendarHelper.getUtcNow())
    const currentYear = calendarHelper.getUtcNow().getFullYear()

    return (
      <div>
        <div className="is-clearfix" />
        <table className="dnwCalendar">
          <tbody>
            {this.getPrevNext(week, year, filterCalendar)}
            {this.getCalendarHeader()}

            {filterCalendar.weeks.map((calendarWeek, indexWeek) => {
              const isCurrent =
                parseInt(calendarWeek.week) === parseInt(week)
                  ? 'is-current'
                  : ''
              return (
                (currentWeek >= calendarWeek.week ||
                  calendarWeek.days[0].date.getFullYear() < currentYear) && (
                  <tr className={`${isCurrent}`} key={`week-${indexWeek}`}>
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
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Calendar

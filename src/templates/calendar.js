import React from 'react'
import * as calendarHelper from '../utils/calendar'

const Calendar = props => {
  /*const params = /\/?week\/(\d+)\/year\/(\d+)\/?$/g.exec(
    props.location.pathname
  )
  if (params.length < 3) {
    return
  }*/
  const { week, year } = props
  const filterCalendar = calendarHelper.getCalendar(week, year)

  return (
    <table className="dnwCalendar">
      <tbody>
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
        {filterCalendar.weeks.map((calendarWeek, indexWeek) => {
          return (
            <tr key={`week-${indexWeek}`}>
              <td>{calendarWeek.week}</td>
              {calendarWeek.days.map((weekDay, indexDay) => {
                return (
                  <td key={`day-${indexDay}`}>
                    <span>{weekDay.date ? weekDay.date.getDate() : ''}</span>
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

export default Calendar

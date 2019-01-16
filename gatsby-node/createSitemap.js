const path = require('path')
const fs = require('fs')
const request = require('request')

const calendarHelp = require('../src/utils/calendar')
const conf = require('../conf')

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

const {
  weeksInYear,
  getUtcNow,
  getWeekNumber,
} = require('../src/utils/calendar')

const getNumStr = function(v) {
  if (v < 10) {
    return `0${v}`
  }
  return `${v}`
}

exports.createSitemaps = async function(createPage, graphql) {
  return new Promise(async (resolve, reject) => {
    try {
      await generateSitemapsAll(createPage, graphql)
      resolve()
    } catch (err) {
      console.log(err)
      reject()
    }
  })
}

async function generateSitemaps() {
  return new Promise((resolve, reject) => {
    request(`${conf.apiDomain}sitemap`, function(error, response, body) {
      fs.writeFileSync(path.join(__dirname, `../src/static/sitemap.xml`), body)
      resolve()
    })
  })
}

async function generateSitemapWeeks() {
  return new Promise((resolve, reject) => {
    request(`${conf.apiDomain}sitemap/weeks`, function(error, response, body) {
      fs.writeFileSync(
        path.join(__dirname, `../src/static/sitemap-weeks.xml`),
        body
      )
      resolve()
    })
  })
}

async function generateSitemapWeek(week, year) {
  return new Promise((resolve, reject) => {
    request(
      `${conf.apiDomain}sitemap/week/${year}/${getNumStr(week)}`,
      function(error, response, body) {
        fs.writeFileSync(
          path.join(
            __dirname,
            `../src/static/sitemap-${year}-${getNumStr(week)}.xml`
          ),
          body
        )
        resolve()
      }
    )
  })
}

async function generateSitemapsAll(createPage, graphql) {
  await generateSitemaps()
  await generateSitemapWeeks()

  let currentWeek = 20
  let currentYear = 2012

  const now = getUtcNow()
  const nowWeek = getWeekNumber(now)[1]
  const lastWeek = getWeekNumber(now)[1]
  const lastYear = now.getFullYear()

  let count = 0
  let lastOne = false
  let breakIt = false

  while (!breakIt) {
    if (
      !fs.existsSync(
        path.join(
          __dirname,
          `../src/static/sitemap-${currentYear}-${getNumStr(currentWeek)}.xml`
        )
      )
    ) {
      await generateSitemapWeek(currentWeek, currentYear)
    }
    if (now.getFullYear() === currentYear && nowWeek === currentWeek) {
      await generateSitemapWeek(currentWeek, currentYear)
    }

    const yearWeeks = weeksInYear(currentYear)
    currentWeek++
    if (yearWeeks < currentWeek) {
      currentWeek = 1
      currentYear++
    }
    if (lastOne) {
      breakIt = true
    }
    if (lastYear === currentYear && lastWeek === currentWeek) {
      lastOne = true
    }

    count++
    if (count > 25000) {
      break
    }
  }
}
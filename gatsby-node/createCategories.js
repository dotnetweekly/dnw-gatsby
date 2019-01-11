const path = require('path')
const axios = require('axios')

const calendarHelp = require('../src/utils/calendar')
const conf = require('../conf')

const {
  weeksInYear,
  getUtcNow,
  getWeekNumber,
} = require('../src/utils/calendar')

exports.createCategories = async function(createPage, graphql) {
  return new Promise(async (resolve, reject) => {
    try {
      generateCategories(createPage, graphql)
      resolve()
    } catch (err) {
      console.log(err)
      reject()
    }
  })
}

const getNumStr = function(v) {
  if (v < 10) {
    return `0${v}`
  }
  return `${v}`
}

function createPages(week, year, graphql, createPage) {
  const now = calendarHelp.getUtcNow()
  const currentWeek = calendarHelp.getWeek(now)
  const currentYear = now.getFullYear()
  const dateRange = calendarHelp.getDateRangeOfWeek(week, year)
  const dateArr = calendarHelp
    .getDates(dateRange.from, dateRange.to)
    .map(fullDate => {
      return `${fullDate.getFullYear()}-${getNumStr(
        fullDate.getMonth() + 1
      )}-${getNumStr(fullDate.getDate())}`
    })
  graphql(`
  {
    allMarkdownRemark(
      filter: { frontmatter: { createdOn: { regex: "/(${dateArr.join(
        '|'
      )})/g" } } }
    ) {
      edges {
        node {
          internal {
            content
          }
          frontmatter {
            title
            _id
            url
            category
            user_id
            username
            createdOn
            slug
            tags
          }
        }
      }
    }
  }
`).then(result => {
    if (result.errors) {
      console.log(result.errors)
    }
    const categoryPath = `/week/${week}/year/${year}`
    if (week == currentWeek && year == currentYear) {
      createPage({
        path: '/',
        component: path.resolve(
          path.join(__dirname, `../src/templates/category.js`)
        ),
        context: {
          week: week,
          year: year,
          links: result,
        },
      })
    }
    createPage({
      path: categoryPath,
      component: path.resolve(
        path.join(__dirname, `../src/templates/category.js`)
      ),
      context: {
        week: week,
        year: year,
        links: result,
      },
    })
    return
  })
}

async function generateCategories(createPage, graphql) {
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
    createPages(currentWeek, currentYear, graphql, createPage)
    if (now.getFullYear() === currentYear && nowWeek === currentWeek) {
      createPages(currentWeek, currentYear, graphql, createPage)
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
    if (count > 2500) {
      break
    }
  }
  // let lastWeek = weeksInYear(firstYear);

  // map into these results and create nodes
  // res.data.data.map((newsletter, i) => {

  // })
}

const path = require('path')
const weeklyCalendarHelper = require('weekly-calendar-helper')

exports.createCategories = async function (createPage, graphql) {
  return new Promise(async (resolve, reject) => {
    try {
      await generateCategories(createPage, graphql)
      resolve()
    } catch (err) {
      console.log(err)
      reject()
    }
  })
}

const getNumStr = function (v) {
  if (v < 10) {
    return `0${v}`
  }
  return `${v}`
}

function createPages(week, year, graphql, createPage) {
  const now = weeklyCalendarHelper.baseHelper.getUtcNow()
  const currentWeek = weeklyCalendarHelper.weekHelper.getWeekNumber(now)
  const currentYear = now.getFullYear()
  const dateRange = weeklyCalendarHelper.weekHelper.getDateRangeOfWeek(
    week,
    year
  )
  const dateArr = weeklyCalendarHelper.baseHelper
    .getDates(dateRange.from, dateRange.to)
    .map(fullDate => {
      return `${fullDate.getFullYear()}-${getNumStr(
        fullDate.getMonth() + 1
      )}-${getNumStr(fullDate.getDate())}`
    })
  //console.log(dateArr)
  graphql(`
  {
    allMarkdownRemark(
      filter: { frontmatter: { createdOn: { gte: "${
    dateArr[0]
    }T00:00:00", lte: "${dateArr[dateArr.length - 1]}T23:59:59" } } }
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
      //console.log(result)
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

  const now = weeklyCalendarHelper.baseHelper.getUtcNow()
  console.log(now)
  const nowWeek = weeklyCalendarHelper.weekHelper.getWeekNumber(now)
  const lastWeek = weeklyCalendarHelper.weekHelper.getWeekNumber(now)
  const lastYear = now.getUTCFullYear()

  let count = 0
  let lastOne = false
  let breakIt = false
  let failsafe = 0

  while (!breakIt) {
    failsafe++
    if (failsafe > 1000) {
      break
    }
    console.log(now.getUTCFullYear(), nowWeek, currentYear, currentWeek)
    createPages(currentWeek, currentYear, graphql, createPage)
    if (now.getUTCFullYear() === currentYear && nowWeek === currentWeek) {
      createPages(currentWeek, currentYear, graphql, createPage)
    }

    const yearWeeks = weeklyCalendarHelper.weekHelper.weeksInYear(currentYear)
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
  }
  // let lastWeek = weeksInYear(firstYear);

  // map into these results and create nodes
  // res.data.data.map((newsletter, i) => {

  // })
}

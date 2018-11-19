const path = require('path')
const axios = require('axios')

const calendarHelp = require('../src/utils/calendar')
const conf = require('../conf')

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
            createdOn
            slug
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
  const fetchNewsletters = () => axios.get(conf.URL.newsletter)
  const res = await fetchNewsletters()

  const now = calendarHelp.getUtcNow()
  const currentWeek = calendarHelp.getWeek(now)
  const currentYear = now.getFullYear()
  let currentWeekFound = false

  res.data.data.map((newsletter, i) => {
    hasBeenFound = createPages(
      newsletter.week,
      newsletter.year,
      graphql,
      createPage
    )
    if (hasBeenFound) {
      currentWeekFound = hasBeenFound
    }
  })
  const emptyLinks = {
    data: {
      allMarkdownRemark: { edges: [] },
    },
  }
  if (!currentWeekFound) {
    createPage({
      path: '/',
      component: path.resolve(
        path.join(__dirname, `../src/templates/category.js`)
      ),
      context: {
        week: currentWeek,
        year: currentYear,
        links: emptyLinks,
      },
    })
  }
}

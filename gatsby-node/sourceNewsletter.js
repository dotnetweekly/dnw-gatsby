// const conf = require('../conf')
// const axios = require('axios')
const crypto = require('crypto')
const {
  weeksInYear,
  getUtcNow,
  getWeekNumber,
} = require('../src/utils/calendar')

exports.sourceNewsletter = async createNode => {
  // const fetchNewsletters = () => axios.get(conf.URL.newsletter)
  // const res = await fetchNewsletters()

  let currentWeek = 20
  let currentYear = 2012

  const now = getUtcNow()
  const lastWeek = getWeekNumber(now)[1]
  const lastYear = now.getFullYear()

  let count = 0

  do {
    // Create your node object
    const newsletterNode = {
      // Required fields
      id: `${currentWeek}-${currentYear}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Newsletters`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      week: currentWeek,
      year: currentYear,
    }
    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(newsletterNode))
      .digest(`hex`)

    newsletterNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(newsletterNode)

    const yearWeeks = weeksInYear(currentYear)
    currentWeek++
    if (yearWeeks < currentWeek) {
      currentWeek = 1
      currentYear++
    }
    if (lastYear === currentYear && lastWeek === currentWeek) {
      break
    }

    count++
    if (count > 400) {
      break
    }
  } while (1)
  // let lastWeek = weeksInYear(firstYear);

  // map into these results and create nodes
  // res.data.data.map((newsletter, i) => {

  // })
}

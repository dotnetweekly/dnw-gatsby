const weeklyCalendarHelper = require('weekly-calendar-helper')
const crypto = require('crypto')

exports.sourceNewsletter = async (createNode) => {
  let currentWeek = 20
  let currentYear = 2012

  const now = weeklyCalendarHelper.baseHelper.getUtcNow()
  const nowWeek = weeklyCalendarHelper.weekHelper.getWeekNumber(now)
  const lastWeek = weeklyCalendarHelper.weekHelper.getWeekNumber(now)
  const lastYear = now.getFullYear()

  let count = 0

  while (1) {
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

    const yearWeeks = weeklyCalendarHelper.weekHelper.weeksInYear(currentYear)
    currentWeek++
    if (yearWeeks < currentWeek) {
      currentWeek = 1
      currentYear++
    }
    if (lastYear === currentYear && lastWeek === currentWeek) {
      break
    }

    count++
    if (count > 5500) {
      break
    }
  }
}

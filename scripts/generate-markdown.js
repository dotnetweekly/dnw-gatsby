const fs = require('fs')
const request = require('request')
const path = require('path')
const config = require('../conf')
const weeklyCalendarHelper = require('weekly-calendar-helper')

const postTmpl = fs.readFileSync(path.join(__dirname, 'post.md')).toString()

const URL_API = config.apiDomain

async function getLinks(week, year) {
  return await new Promise((resolve, reject) => {
    request(
      `${URL_API}links?category=&week=${week}&year=${year}`,
      function (error, response, body) {
        const linkJson = JSON.parse(body)
        linkJson.data.links
        resolve(linkJson.data.links)
      }
    )
  })
}

async function createPost(week, year, link) {
  const weekPath = path.join(__dirname, `../src/newsletters/${year}/${week}`)
  const postPath = `${weekPath}/${link['slug']}.md`
  if (fs.existsSync(postPath)) {
    return
  }

  return new Promise((resolve, reject) => {
    request(
      `${URL_API}links/${link['slug']}`,
      function (error, response, body) {
        try {
          const linkJson = JSON.parse(body)
          const postData = postTmpl
            .replace('_id: %s', `_id: "${link['_id']}"`)
            .replace(
              'title: "%s"',
              `title: "${link['title'].replace(/"/g, '')}"`
            )
            .replace("url: '%s'", `url: '${link['url']}'`)
            .replace('category: %s', `category: ${link['category']}`)
            .replace("slug: '%s'", `slug: '${link['slug']}'`)
            .replace('user_id: %s', `user_id: ${link['user']['_id']}`)
            .replace(
              "username: '%s'",
              `username: '${link['user']['username']}'`
            )
            .replace("createdOn: '%s'", `createdOn: '${link['createdOn']}'`)
            .replace('tags: [%s]', `tags: [${link['tags'].join(',')}]`)
            .replace('**CONTENT**', `${linkJson.data['content']}`)

          fs.writeFileSync(postPath, postData)
          resolve()
        } catch (ex) {
          reject()
        }
      }
    )
  })
}

async function generate() {
  let currentWeek = 20
  let currentYear = 2012

  const now = weeklyCalendarHelper.baseHelper.getUtcNow()
  const nowWeek = weeklyCalendarHelper.weekHelper.getWeekNumber(now)
  const lastWeek = weeklyCalendarHelper.weekHelper.getWeekNumber(now)
  const lastYear = now.getFullYear()

  let count = 0

  let lastOne = false
  let breakIt = false

  while (!breakIt) {
    if (
      !fs.existsSync(path.join(__dirname, `../src/newsletters/${currentYear}`))
    ) {
      fs.mkdirSync(path.join(__dirname, `../src/newsletters/${currentYear}`))
    }
    let folderExists = fs.existsSync(
      path.join(__dirname, `../src/newsletters/${currentYear}/${currentWeek}`)
    )

    if (!folderExists) {
      fs.mkdirSync(
        path.join(__dirname, `../src/newsletters/${currentYear}/${currentWeek}`)
      )
    }
    if (
      !folderExists ||
      (now.getFullYear() === currentYear && nowWeek - 1 === currentWeek) ||
      (now.getFullYear() === currentYear && nowWeek === currentWeek)
    ) {
      const links = await getLinks(currentWeek, currentYear)
      for (key in links) {
        await createPost(currentWeek, currentYear, links[key])
      }
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

    count++
    if (count > 2500) {
      break
    }
  }
  return
}

exports.generateMarkdown = async function () {
  await generate()
}

const args = process.argv
if (args.length > 0 && args[2] == 'run') {
  generate()
}

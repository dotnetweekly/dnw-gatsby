const fs = require('fs')
const path = require('path')
const weeklyCalendarHelper = require('weekly-calendar-helper')
const { generateMarkdown } = require('../scripts/generate-markdown')

const { gitCommitPush } = require('git-commit-push-via-github-api')
process.on('unhandledRejection', console.dir)
if (!process.env.GITHUB_API_TOKEN) {
  throw new Error('GITHUB_API_TOKEN=xxx node example.js')
}

const now = weeklyCalendarHelper.baseHelper.getUtcNow()
const currentWeek = weeklyCalendarHelper.weekHelper.getWeekNumber(now)
const currentYear = now.getFullYear()
const weekFolder = path.join(
  __dirname,
  `../src/newsletters/${currentYear}/${currentWeek}/`
)

let oldPosts = []
if (fs.existsSync(weekFolder)) {
  oldPosts = fs.readdirSync(weekFolder)
}

async function generateMarkdownSync() {
  await generateMarkdown()
  let newOldPosts = fs.readdirSync(weekFolder)
  console.log('newOldPosts: ', newOldPosts)
  let newPosts = newOldPosts.filter(x => {
    return !oldPosts.includes(x)
  })

  if (newPosts.length === 0) {
    return
  }

  console.log('newPosts: ', newPosts)

  gitCommitPush({
    owner: 'dotnetweekly',
    repo: 'dnw-gatsby',
    files: newPosts.map(newPost => {
      return {
        path: `src/newsletters/${currentYear}/${currentWeek}/${newPost}`,
        content: fs.readFileSync(
          path.join(
            __dirname,
            `../src/newsletters/${currentYear}/${currentWeek}/${newPost}`
          ),
          'utf-8'
        ),
      }
    }),
    fullyQualifiedRef: 'heads/master',
    forceUpdate: false, // optional default = false
    commitMessage: 'new posts',
  })
    .then(res => {
      console.log('success', res)
    })
    .catch(err => {
      console.error('error with commit:', err)
    })
}

generateMarkdownSync()

const fs = require('fs')
const path = require('path')
const calendarHelp = require('../src/utils/calendar')
const { generateMarkdown } = require('../scripts/generate-markdown')

const { gitCommitPush } = require('git-commit-push-via-github-api')
process.on('unhandledRejection', console.dir)
if (!process.env.GITHUB_API_TOKEN) {
  throw new Error('GITHUB_API_TOKEN=xxx node example.js')
}

const now = calendarHelp.getUtcNow()
const currentWeek = calendarHelp.getWeek(now)
const currentYear = now.getFullYear()
const weekFolder = path.join(
  __dirname,
  `../src/newsletters/${currentYear}/${currentWeek}/`
)

let oldPosts = fs.readdirSync(weekFolder)

async function generateMarkdownSync() {
  return await generateMarkdown()
}

generateMarkdownSync().then(() => {
  let newOldPosts = fs.readdirSync(weekFolder)
  let newPosts = newOldPosts.filter(x => {
    return !oldPosts.includes(x)
  })

  gitCommitPush({
    // commit to https://github.com/azu/commit-to-github-test
    owner: 'dotnetweekly',
    repo: 'dnw-gatsby',
    // commit files
    files: newPosts.map(newPost => {
      return {
        path: `src/newsletters/${currentYear}/${currentWeek}/${newPost}`,
        content: fs.readFileSync(
          path.join(
            __dirname,
            `/../src/newsletters/${currentYear}/${currentWeek}/${newPost}`
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
      console.error(err)
    })
})

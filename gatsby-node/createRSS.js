const fs = require('fs')
const path = require('path')
const request = require('request')
const config = require('../conf')

const createRSSAction = async function() {
  return new Promise((resolve, reject) => {
    request(`${config.apiDomain}links?feed=rss`, function(
      error,
      response,
      body
    ) {
      if (error) {
        reject(error)
      }
      fs.writeFileSync(path.join(__dirname, `../src/static/rss.xml`), body)
      fs.writeFileSync(
        path.join(__dirname, `../src/static/feed/index.html`),
        body
      )
      resolve()
    })
  })
}

exports.createRSS = async function(createPage, graphql) {
  await createRSSAction()
}

const args = process.argv
if (args && args.length > 0 && args[2] == 'run') {
  createRSSAction()
}

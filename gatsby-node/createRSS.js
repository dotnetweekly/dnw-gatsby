const fs = require('fs')
const path = require('path')
const request = require('request')
const config = require('../conf')

exports.createRSS = function(createPage, graphql) {
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
      resolve()
    })
  })
}

const path = require('path')
const axios = require('axios')

const conf = require('../conf')

exports.createCategories = function(createPage, graphql) {
  return new Promise((resolve, reject) => {
    try {
      generateCategories(createPage, graphql)
      resolve()
    } catch (err) {
      reject()
    }
  })
}

async function generateCategories(createPage, graphql) {
  const fetchNewsletters = () => axios.get(conf.URL.newsletter)
  const res = await fetchNewsletters()

  res.data.data.map((newsletter, i) => {
    createPage({
      path: `/week/${newsletter.week}/year/${newsletter.year}`,
      component: path.resolve(
        path.join(__dirname, `../src/templates/category.js`)
      ),
    })
  })
}

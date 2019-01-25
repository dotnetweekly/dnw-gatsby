const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')

fs.readdir(path.resolve(__dirname, '../src/static'), (err, files) => {
  files.forEach(file => {
    if (file.includes('.') !== -1) {
      fs.copyFile(
        `${path.resolve(__dirname, '../src/static')}/${file}`,
        `${path.resolve(__dirname, '../public')}/${file}`,
        err => {
          if (err) throw err
        }
      )
    }
  })
})

if (!fs.existsSync(path.resolve(__dirname, '../public/feed'))) {
  fs.mkdirSync(path.resolve(__dirname, '../public/feed'))
}

fs.copyFile(
  `${path.resolve(__dirname, '../src/static/feed')}/index.html`,
  `${path.resolve(__dirname, '../public/feed')}/index.html`,
  err => {
    if (err) throw err
  }
)

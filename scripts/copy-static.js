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

fse.copySync(
  path.resolve(__dirname, '../src/static/feed'),
  path.resolve(__dirname, '../public/feed')
)

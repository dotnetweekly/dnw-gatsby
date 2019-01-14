const path = require('path')
const fs = require('fs')

fs.readdir(path.resolve(__dirname, '../src/static'), (err, files) => {
  files.forEach(file => {
    fs.copyFile(
      `${path.resolve(__dirname, '../src/static')}/${file}`,
      `${path.resolve(__dirname, '../public')}/${file}`,
      err => {
        if (err) throw err
      }
    )
  })
})

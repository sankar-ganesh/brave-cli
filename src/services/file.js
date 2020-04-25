const fs = require('fs')

// Singleton Instance
let instance = null

/*
 *  @class File
 *  Singleton Class File
 */
class File {
  constructor() {
    if (instance) {
      return instance
    }
    instance = this
    return instance
  }

  async fetch(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  }
}

module.exports = File

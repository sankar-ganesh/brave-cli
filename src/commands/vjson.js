const {Command, flags} = require('@oclif/command')
const File = require('../services/file')

class VJSONCommand extends Command {
  async run() {
    try {
      let {flags} = this.parse(VJSONCommand)
      let path = flags.path
      let configPath = flags.config || 'brave-cli.json'
      let fileService = new File()
      let pathj
      let configj

      // Reset Input File
      if (flags.pathj) {
        path = null
        pathj = flags.pathj
      }

      // Reset Input Config
      if (flags.configj) {
        configPath = null
        configj = flags.configj
      }

      let data = (path && await fileService.fetch(path)) || pathj
      let parsedJSON = data && JSON.parse(data)
      let configData = (configPath && await fileService.fetch(configPath)) || configj
      let parsedConfigJSON = configData && JSON.parse(configData)

      // Iterate Config JSON and validate the input JSON
      let validateJSON = parsedConfigJSON && parsedConfigJSON.json
      if (parsedJSON && validateJSON) {
        let keys = validateJSON && validateJSON.keys
        let uppercase = keys && keys.uppercase === false
        let lowercase = keys && keys.lowercase === false
        let digits = keys && keys.digits === false
        let underscore = keys && keys.underscore === false
        let hyphen = keys && keys.hyphen === false
        let error = null
        let that = this

        let jsonIterator = function (json) {
          for (let jsonKey in json) {
            if (Object.prototype.hasOwnProperty.call(json, jsonKey)) {
              if (underscore) {
                if (/[_]/.test(jsonKey)) {
                  that.log(`Key Found => ${jsonKey}`)
                  error = 'Underscore Exists'
                  break
                }
              }

              if (hyphen) {
                if (/[-]/.test(jsonKey)) {
                  that.log(`Key Found => ${jsonKey}`)
                  error = 'Hyphen Exists'
                  break
                }
              }

              if (uppercase) {
                if (/[A-Z]/.test(jsonKey)) {
                  that.log(`Key Found => ${jsonKey}`)
                  error = 'Uppercase Exists'
                  break
                }
              }

              if (lowercase) {
                if (/[a-z]/.test(jsonKey)) {
                  that.log(`Key Found => ${jsonKey}`)
                  error = 'Lowercase Exists'
                  break
                }
              }

              if (digits) {
                if (/\d/.test(jsonKey)) {
                  that.log(`Key Found => ${jsonKey}`)
                  error = 'Digits Exists'
                  break
                }
              }
              if (typeof json[jsonKey] === 'object') {
                jsonIterator(json[jsonKey])
              }
            }
          }
        }
        jsonIterator(parsedJSON)
        if (error) {
          this.log(`Validation Failed : ${error}`)
        } else {
          this.log('Validation Successful')
        }
      } else {
        this.log('Path Param Missing')
      }
    } catch (error) {
      this.log('Error')
    }
  }
}

VJSONCommand.description = `Validates the JSON based on the rules given in the config file brave-cli.json [by default placed in the root folder]
Config for JSON validation in brave-cli.json
{
  "json": {
    "keys": {
      "underscore": true,     // Allows underscore in key names
      "hyphen": false,        // Disallow hyphen in key names
      "uppercase": false,     // Disallow uppercase in key names
      "digits": true,         // Allow digits in key names
      "lowercase": true       // Allow lowercase in key names
    }
  }
}
`

VJSONCommand.flags = {
  path: flags.string({char: 'p', description: 'path of the file to display'}),
  config: flags.string({char: 'c', description: 'path of the config file'}),
  pathj: flags.string({char: 'P', description: 'config json string to validate'}),
  configj: flags.string({char: 'C', description: 'config json string to validate'}),
}

module.exports = VJSONCommand

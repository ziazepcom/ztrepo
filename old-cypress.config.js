

const fs = require('fs')
const path = require('path')
//const neatCSV = require('neat-csv')

module.exports = defineConfig({
  projectId: 'aaseof',
    
  e2e: {
    

    async setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      const filename = path.join(__dirname, 'cypress/fixtures/usersList.csv')
      console.log('loading file', filename)
      const text = fs.readFileSync(filename, 'utf8')
      //const csv = await neatCSV(text)

      
      const mysql = require('mysql')
      function queryTestDb(query, config) {
        const connection = mysql.createConnection(config.env.db)
        connection.connect()
        return new Promise((resolve, reject) => {
          connection.query(query, (error, results) => {
            if (error) reject(error)
            else {
              connection.end()
              return resolve(results)
            }
          })
        })
      }

      module.exports = (on, config) => {
        //on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
      }
      // implement node event listeners here
      on("task", {
        log(message) {
          return console.log(message);
        },
      });
      on("task", { downloadFile }),
        on("task", {
          fileName: "googlelogo_color_272x92dp.png",
          lang: "eng",
          logger: "false",
        });
    },
  },
});
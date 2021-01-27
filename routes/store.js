var storage = require('azure-storage')
const table = 'prodcutsdb'
var service = storage.createTableService('yourbestappstor', 'jJdxCY8ysmhX0QoKKIKMLAwkmg35IOPZBPRDq+RdZQFCgeceLfzPPioOMHNsKkeKX1dsis/4MGm16xRxbEm4kQ==');

const init = async () => (
    new Promise((resolve, reject) => {
        service.createTableIfNotExists(table, (error, result, response) => {
            !error ? resolve() : reject()
        })
    })
)

const listProducts = async () => (
    new Promise((resolve, reject) => {
        tableSvc.queryEntities(table, query, null, function(error, result, response) {
            if(!error) {
              // query was successful
            }
        });
    })
  )

 module.exports = {
   init,
   listProducts
 }
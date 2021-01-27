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
        const query = new storage.TableQuery()
       .select(['name'])

       service.queryEntities(table, query, null, (error, result, response) => {
        !error ? resolve(result.entries.map((entry) => ({
          name: entry.name._,
        }))) : reject()
      })
    })
)

 module.exports = {
   init,
   listProducts
 }
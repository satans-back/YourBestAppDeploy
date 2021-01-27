const storage = require('azure-storage')
const service = storage.createTableService()
const table = 'prodcutsdb'

const init = async () => (
new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
        !error ? resolve() : reject()
        })
    })
)

module.exports = {
    init
}
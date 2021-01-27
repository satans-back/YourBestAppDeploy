const storage = require('azure-storage')
const service = storage.createTableService('yourbestappstor', 'jJdxCY8ysmhX0QoKKIKMLAwkmg35IOPZBPRDq+RdZQFCgeceLfzPPioOMHNsKkeKX1dsis/4MGm16xRxbEm4kQ==');
const table = 'prodcutsdb'

module.exports = {
    init
}
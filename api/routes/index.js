const bodyParser = require('body-parser')
const cors = require('cors')
const users = require('./usersRoute')
const customers = require('./customersRoute')

module.exports = app => {
    app.use(
        cors(),
        bodyParser.json(),
        users,
        customers
    )
}
const { Router } = require('express')
const CustomerController = require('../controllers/CustomerController')

const router = Router()

router
    .get('/api/customers', CustomerController.getAll)
    .get('/api/customers/:id', CustomerController.getCustomers)
    .post('/api/customers', CustomerController.addNewCustomers)
    .put('/api/customers/:id', CustomerController.updateCustomers)
    .delete('/api/customers/:id', CustomerController.deleteCustomers)


module.exports = router
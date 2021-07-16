const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router
    .get('/api/users', UserController.getAll)
    .get('/api/users/:id', UserController.getUser)
    .post('/api/users', UserController.addNewUser)
    .post('/api/users/verify/email', UserController.verifyUserEmail)
    .put('/api/users/:id', UserController.updateUser)
    .delete('/api/users/:id', UserController.deleteUser)


module.exports = router
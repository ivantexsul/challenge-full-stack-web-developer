const express = require('express')

const routes  = require('./routes')

const app = express()
const port = 8081

app.use((req, res, next) =>{
    res.set('Access-Control-Allow-Origin', 'http://localhost:8081')
    next()
})

routes(app)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

module.exports = app
const cors = require('cors')
const express = require('express')
const app = express()
const port = 8000

const todo = require('./src/routes/todos')
const done = require('./src/routes/dones')

app.use(express.json())
app.use(cors())
app.options("*", cors())
app.use('/todo', todo)
app.use('/done', done)

app.listen(port, "", () => {
    console.log(`App running on port ${port}`)
})
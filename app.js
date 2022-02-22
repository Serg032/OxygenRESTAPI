const express = require('express')
const app = express()
const port = 8000

const todo = require('./src/routes/todos')

app.use(express.json())

app.use('/todo', todo)

app.listen(port, "", () => {
    console.log(`App running on port ${port}`)
})
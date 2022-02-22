const mongoose = require('mongoose')
require('dotenv').config();

const DB_URL = process.env.DB_URL;
const DATABASE = process.env.DATABASE;

mongoose.connect(`${DB_URL}/${DATABASE}`)

const todoSchema = require('./schemas/todoSchema')

const Todo = mongoose.model('Todo', todoSchema)

module.exports = {
    Todo,
}
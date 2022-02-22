const { Todo } = require('./../models/mongoose')

const create = async (document) => {
    const todo = await new Todo(document).save()
    return todo
};

const readAll = async () => {
    const todos = await Todo.find()
    return todos
}

const read = async (id) => {
    const todo = await Todo.findById(id)
    return todo
}

const update = async (id, document) => {
    const todo = await Todo.findByIdAndUpdate(id)
    todo.set({...todo, ...document})
    await todo.save()
    return todo
}

const remove = async (id) => {
    await Todo.findByIdAndDelete(id)
}

module.exports = {
    create,
    readAll,
    read,
    update,
    remove
}
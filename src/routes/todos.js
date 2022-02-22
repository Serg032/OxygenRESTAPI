const router = require('express').Router()
const todoService = require('./../services/todoService')

router.get('/', async(req,res,next) => {
    const todos = await todoService.readAll()
    res.json(todos)
})

router.get('/:id', async (req,res,next) => {
    const {id} = req.params
    const todo = await todoService.read(id)
    res.json(todo)
})

router.post('/', async (req,res,next) => {
    const document = req.body
    await todoService.create(document)
    res.status(201).json({message: 'To do created'})
})

router.put('/:id', async (req,res,next) => {
    const {id} = req.params
    const document = req.body
    const todo = await todoService.update(id, document)
    res.json(todo)
})

router.patch('/:id', async (req,res,next) => {
    const {id} = req.params
    const document = req.body
    const todo = await todoService.update(id, document)
    res.json(todo)
})

router.delete('/:id', async (req,res,next) => {
    const {id} = req.params
    await todoService.remove(id)
    res.json({message: 'To Do deleted'})
})
module.exports = router
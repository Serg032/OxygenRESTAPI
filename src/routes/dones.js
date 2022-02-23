const router = require('express').Router()
const doneService = require('./../services/doneService')

router.get('/', async(req,res,next) => {
    const dones = await doneService.readAll()
    res.json(dones)
})

router.get('/:id', async (req,res,next) => {
    const {id} = req.params
    const done = await doneService.read(id)
    res.json(done)
})

router.post('/', async (req,res,next) => {
    const document = req.body
    await doneService.create(document)
    res.status(201).json({message: 'Done created'})
})

router.put('/:id', async (req,res,next) => {
    const {id} = req.params
    const document = req.body
    const done = await doneService.update(id, document)
    res.json(done)
})

router.patch('/:id', async (req,res,next) => {
    const {id} = req.params
    const document = req.body
    const done = await doneService.update(id, document)
    res.json(done)
})

router.delete('/:id', async (req,res,next) => {
    const {id} = req.params
    await doneService.remove(id)
    res.json({message: 'Done deleted'})
})
module.exports = router
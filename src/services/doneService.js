const { Done } = require('./../models/mongoose')

const create = async (document) => {
    const done = await new Done(document).save()
    return done
};

const readAll = async () => {
    const dones = await Done.find()
    return dones
}

const read = async (id) => {
    const done = await Done.findById(id)
    return done
}

const update = async (id, document) => {
    const done = await Done.findByIdAndUpdate(id)
    done.set({...done, ...document})
    await done.save()
    return done
}

const remove = async (id) => {
    await Done.findByIdAndDelete(id)
}

module.exports = {
    create,
    readAll,
    read,
    update,
    remove
}
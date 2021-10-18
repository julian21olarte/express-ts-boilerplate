const assert = require('assert')
import { PersonsModel } from '../src/models/persons.model'
import { db } from '../src/memory-database'
import { after } from 'mocha'
import { PersonsService } from '../src/services/persons.service'

const personsService = new PersonsService()
beforeEach(async () => {
    await db({ test: true })
})

describe('Persons Model', async () => {
    it('Allows to create two persons with different emails', async () => {
        await personsService.create({ name: 'julian test 1', email: 'julian1@gmail.com', gender: 'Male', type: 'dev' })
        await personsService.create({ name: 'julian test 2', email: 'julian2@gmail.com', gender: 'Male', type: 'engineer' })

        const p1 = await PersonsModel.findOne({ email: 'julian1@gmail.com' })
        const p2 = await PersonsModel.findOne({ email: 'julian2@gmail.com' })
        assert.equal(p1.email, 'julian1@gmail.com')
        assert.equal(p2.email, 'julian2@gmail.com')
    })

    it('Prevents creating a person that already exists on the Database', async () => {
        try {
            await personsService.create({ name: 'julian test 1', email: 'julian1@gmail.com', gender: 'Male', type: 'dev' })
            await personsService.create({ name: 'julian test 1', email: 'julian1@gmail.com', gender: 'Male', type: 'dev' })
        } catch (e: any) {
            assert.equal(e.message, 'User already exist')
        }
    })
})

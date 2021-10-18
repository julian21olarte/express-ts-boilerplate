import { Person } from '../interfaces/person'
import { PersonsModel } from '../models/persons.model'

export class PersonsService {
    getAll(): Person[] {
        return PersonsModel.find()
    }

    async create(person: Person) {
        const found = await PersonsModel.findOne({ email: person.email })
        if(found) {
            throw Error('User already exist')
        }
        await PersonsModel.create(person)
    }
}

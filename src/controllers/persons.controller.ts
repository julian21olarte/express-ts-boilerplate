import { JsonController, Get, Post, Body } from 'routing-controllers'
import { PersonsService } from '../services/persons.service'
import { Person } from '../interfaces/person'

const personsService = new PersonsService()

@JsonController('/persons', { transformResponse: false })
export class PersonsController {
    @Get()
    async getAll() {
        const data = await personsService.getAll()
        return {
            status: 200,
            data,
        }
    }

    @Post('', { transformResponse: false })
    async create(@Body() p: Person) {
        await personsService.create(p)
        return {
            status: 201,
        }
    }
}

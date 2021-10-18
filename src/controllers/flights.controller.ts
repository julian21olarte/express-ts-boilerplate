import { JsonController, Get, Body, Post, Put, Param } from 'routing-controllers'
import { FlightsService } from '../services/flights.service'
import { Flight } from '../interfaces/flight';

const flightsService = new FlightsService()

@JsonController('/flights')
export default class FlightsController {
    @Get('', { transformResponse: false })
    async getAll() {
        const data = await flightsService.getAll();
        return {
            status: 200,
            data
        }
    }

    @Post('', { transformResponse: false })
    async create(@Body() f: Flight) {
        await flightsService.create(f)
        return {
            status: 201,
        }
    }

    @Put('', { transformResponse: false })
    async addPerson(@Param('code') code: string, @Body() body: any) {
        const { email } = body;
        const data = await flightsService.update({ code }, { $push: { passengers: email } })
        return {
            status: 200,
            data,
        }
    }
}

import { Flight } from '../interfaces/flight'
import { FlightsModel } from '../models/flights.model'

export class FlightsService {
    getAll(): Flight[] {
        return FlightsModel.find()
    }

    async getOne(query: any): Promise<Flight> {
        return FlightsModel.findOne(query)
    }

    async create(flight: Flight) {
        await FlightsModel.create(flight)
    }

    update(filter: any, flight: any): Flight {
        return FlightsModel.findOneAndUpdate(filter, flight, { new: true })
    }
}

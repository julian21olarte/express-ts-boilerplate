import mongoose, { Schema } from 'mongoose'
import { Flight } from '../interfaces/flight'

const schema = new Schema<Flight>(
    {
        code: { required: true, type: String },
        origin: { required: true, type: String },
        destination: { required: true, type: String },
        passengers: { type: Array },
        status: String,
    },
    { timestamps: true }
)

export const FlightsModel = mongoose.model('Flights', schema)

import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, enum: ['Spiral', 'Elliptical', 'Peculiar', 'Irregular'], required: true},  
},
{timestamps: true, toJSON: {virtuals: true}}
)
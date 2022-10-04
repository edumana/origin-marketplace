import mongoose from 'mongoose'
const Schema = mongoose.Schema

/*---------------------------- Coffee Schema  ----------------------------*/

const coffeeSchema = new Schema({
  name: {
    type: String,
  },
  available: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  farm: {
    type: String,
  },
  harvest: {
    type: Date,
  },
  variety: String,
  notes: String,
  country: {
    type: String,
  },
  process: String,
  altitude: {
    type: Number,
  },
}, {
  timestamps: true
})

const Coffee = mongoose.model('Coffee', coffeeSchema)

export {
  Coffee,
}
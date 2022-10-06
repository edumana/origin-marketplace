import mongoose from 'mongoose'
const Schema = mongoose.Schema

/*---------------------------- Coffee Schema  ----------------------------*/

const coffeeSchema = new Schema({
  name: {
    type: String,
  },
  available: {
    type: Boolean,
  },
  quantity: {
    type: Number,
    min: 1,
  },
  price: {
    type: Number,
    min: 0.1,
  },
  farm: {
    type: String,
  },
  harvest: {
    type: Date,
  },
  variety: {
    type: String,
    enum: ['Caturra', 'Catuai', 'Gesha', 'Maragogype', 'Bourbon', 'Bourbon, Pink', 'Exotic/Other', 'Blend']    
  },
  notes: String,
  country: {
    type: String,
    enum: ["Mexico", "Guatemala", "El Salvador", "Nicaragua", "Honduras", "Costa Rica", "Panama", "Colombia", "Brazil", "Ecuador", "Peru", "Bolivia", ""]
  },
  process: {
    type: String,
    enum: ['Washed', 'Natural', 'Honey', 'Other'] 
  },

  supplier: {type: Schema.Types.ObjectId, ref: 'Supplier'},

  altitude: {
    type: Number,
    min: 0,
  },
}, {
  timestamps: true
})

const Coffee = mongoose.model('Coffee', coffeeSchema)

export {
  Coffee,
}
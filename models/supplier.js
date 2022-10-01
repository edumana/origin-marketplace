import mongoose from 'mongoose'

const Schema = mongoose.Schema

const coffeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
  quantityAvailable: {
    type: Number,
    min: 0,
  },
  harvestMonth: {
    type: String,
    enum: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  },
  harvestYear: {
    type: Number,
    min: 2020
  },
  variety: String,
  notes: String,
  department: String,
  country: {
    type: String,
    enum: ["MEXICO", "GUATEMALA", "EL SALVADOR", "NICARAGUA", "HONDURAS", "COSTA RICA", "PANAMA", "COLOMBIA", "BRAZIL", "ECUADOR", "PERU", "BOLIVIA"]
  },
  process: String,
  altitude: {
    type: Number,
    min: 300,
    max: 2500,
  },
}, {
  timestamps: true
})

const supplierSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },

  story: String,
  profilePicture: String,
  certifications: String,
  awards: String,

  country: {
    type: String,
    enum: ["MEXICO", "GUATEMALA", "EL SALVADOR", "NICARAGUA", "HONDURAS", "COSTA RICA", "PANAMA", "COLOMBIA", "BRAZIL", "ECUADOR", "PERU", "BOLIVIA"]
  },

  availableCoffees: [coffeeSchema],
  pastCoffees: [coffeeSchema],
}, {
  timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema)

export {
  Supplier
}
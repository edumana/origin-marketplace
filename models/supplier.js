import mongoose from 'mongoose'
const Schema = mongoose.Schema

/*---------------------------- Coffee Schema  ----------------------------*/
/*
|
|
|    Coffee.
|              
|         
|
*/
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

/*---------------------------- Supplier Schema  ----------------------------*/
/*
|
|
|    Supplier.
|              
|         
|
*/
const supplierSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  avatar: String,
  companyName: {
    type: String,
    required: false
  },
  story: String,
  profilePicture: String,
  certifications: String,
  taxId: Number,
  country: {
    type: String,
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

//enum: ["MEXICO", "GUATEMALA", "EL SALVADOR", "NICARAGUA", "HONDURAS", "COSTA RICA", "PANAMA", "COLOMBIA", "BRAZIL", "ECUADOR", "PERU", "BOLIVIA"]
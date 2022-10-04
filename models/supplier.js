import mongoose from 'mongoose'
const Schema = mongoose.Schema

/*---------------------------- Supplier Schema  ----------------------------*/

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

  availableCoffees: [{type: Schema.Types.ObjectId, ref: 'Coffee'}],
  
}, {
  timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema)


export {
  Supplier,
}

//enum: ["MEXICO", "GUATEMALA", "EL SALVADOR", "NICARAGUA", "HONDURAS", "COSTA RICA", "PANAMA", "COLOMBIA", "BRAZIL", "ECUADOR", "PERU", "BOLIVIA"]
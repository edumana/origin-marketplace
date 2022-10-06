import mongoose from 'mongoose'
const Schema = mongoose.Schema

/*---------------------------- Farm Schema  ----------------------------*/


const farmSchema = new Schema({
  name: String,
})

/*---------------------------- Supplier Schema  ----------------------------*/

const supplierSchema = new Schema({
  name: {
    type: String,
  },
  country: {
    type: String,
    enum: ["Mexico", "Guatemala", "El Salvador", "Nicaragua", "Honduras", "Costa Rica", "Panama", "Colombia", "Brazil", "Ecuador", "Peru", "Bolivia", ""]
  },
  companyName: {
    type: String,
  },
  availableCoffees: [{type: Schema.Types.ObjectId, ref: 'Coffee'}],

  avatar: String,
  story: String,
  profilePicture: String,
  farms: [farmSchema],
  taxId: Number,
}, {
  timestamps: true
})

const Supplier = mongoose.model('Supplier', supplierSchema)

export {
  Supplier,
}


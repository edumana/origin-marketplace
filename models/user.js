import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: String,
  googleId: String,
  avatar: String,
  supplier: {type: Schema.Types.ObjectId, ref: "Supplier"}
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

export {
  User
}
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{type: String, required: true },
  city:{type: String, required: true },
  phone:{type: String, required: true, unique: true, sparse: true },
  email:{type: String, required: true, unique: true, sparse: true }
})

export default mongoose.models.user || mongoose.model('user', userSchema)
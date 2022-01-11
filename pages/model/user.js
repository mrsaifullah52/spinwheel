import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name:{type: String, required: true },
  city:{type: String, required: true },
  phone:{type: String, required: true, unique: true},
  email:{type: String, required: true, unique: true}
})

const User=mongoose.models.User || mongoose.model('user', userSchema);

export default User;
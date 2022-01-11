import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  email:{type: String, required: true, unique: true, sparse: true},
  basic:{type: Number },
  social:[]
})

export default mongoose.models.Point || mongoose.model('Point', pointSchema)
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true, required: true, index: true},
  email: {type: String, lowercase: true, unique: true, required: true, index: true},
  password: {type: String, required: true}
}, {timestamps: true});

const userModel = mongoose.model('user', userSchema);

export default userModel;
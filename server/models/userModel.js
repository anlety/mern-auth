import mongoose from 'mongoose';

// 1 Create user schema: rules and types of the data
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requited: true,
    // unique true means that the username should be unique in the all application
    unique: true,
  },
  email: {
    type: String,
    requited: true,
    // unique true means that the username should be unique in the all application
    unique: true,
  },
  password: {
    type: String,
    requited: true,
    
  },
  
}, 
// add the time of creation and the time of edit
{timestamps: true});

const User = mongoose.model('User', userSchema)

export default User;
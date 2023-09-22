import User from "../models/userModel.js";
import bcryptjs from "bcryptjs"

export const signup = async(req, res)=>{
 
     // 1.Destructure the data coming from the client
    const {username, email, password} = req.body;

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10)

    // 2.Create a new user and save it to the database
    const newUser = new User({username, email, hashedPassword});
try {
 
    await newUser.save();
    res.status(200).json({message: 'User created successfully'})
} catch (error) {
  res.status(500).json({message: 'Failed to create user'})
}

}
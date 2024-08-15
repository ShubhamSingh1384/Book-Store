const User = require('../models/User.Model')
const bcrypt = require('bcrypt');

const signup = async (req, res)=>{
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "user already exist"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            fullname,
            email,
            password : hashedPassword,
        })
        await newUser.save()
        res.status(200).json(
            {message:"user created successfully",
            user: newUser
        })
    } catch (error) {
        res.status(500).json({message: "Problem in user Controller signup"})
        console.log(error);
    }
}

const login = async (req, res)=>{
    try {
        const { email, password } = req.body;
        // console.log(email , " ", password);
        const user = await User.findOne({email})
        // console.log(user);
        if(user){
            const isMatch = await bcrypt.compare(password, user.password);
            // const isMatch = (password === user.password);
            if(isMatch)
            return res.status(200).json(
            {message: "user found",
            user
            });
            else
            return res.status(400).json({message:"Invalid Username or Password"});
        }
        return res.status(400).json({message: "user not found please signUp"})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Problem in user Controller login"})
    }
}

module.exports = {signup , login}
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const USER = require('../models/userModel')
const asyncHandler = require('express-async-handler')



// desc register user
// POST /user/register
//route type PUBLIC
const register = asyncHandler(async (req,res)=>{
    const { name ,email, password } = req.body

    // check for missing values
    if(!name || !email || !password){
        throw new Error('All fields required')
    }
    
    // check if user exists
    const checkUser = await USER.findOne({email})
    if(checkUser){
        throw new Error('user already exists')
    }

    // hashing password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)

    //create user
    const newUser =await USER.create({
        name,
        email,
        password: hashPassword
    }) 
    if(newUser){
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token: genrateToken(newUser._id)
        })
    }
})

// desc login user
// POST /user/login
//route type PUBLIC
const login = asyncHandler(async (req,res)=>{
    const { email, password } = req.body

    // check if email exists
    const findUser = await USER.findOne({email})

    if(findUser && (await bcrypt.compare(password, findUser.password))){
        res.json({
            _id: findUser._id,
            name: findUser.name,
            email: findUser.email,
            token: genrateToken(findUser._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

})

// desc add to user cart
// POST /user/additem
// route type PROTECTED

const addItem = asyncHandler(async (req,res)=>{
    const updateUser = await USER.findByIdAndUpdate(req.user._id,{$push: {"cart": {item: req.body.id, quantity: req.body.quantity}}},{new: true})
    res.json({
        _id: updateUser._id,
        name: updateUser.name,
        cart: updateUser.cart
    })
})


//desc get information of logged in user
// GET /user/info
//route type PROTECTED

const userInfo = asyncHandler(async (req,res)=>{
    const userinfo = await USER.findOne({email: req.user.email}).select('-password')
    if(!userinfo){
        throw new Error('something went wrong')
    } 
    res.status(200).json(userinfo)
})


// generate token
const genrateToken =(id)=>{
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn: '1d'
    })
}


module.exports = {register,login,addItem,userInfo}


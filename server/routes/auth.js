const router = require('express').Router()
const { hash, genSalt, compare } = require('bcrypt')
const { sign, verify } = require('jsonwebtoken')
const Vendor = require('../models/Vendors')

router.post("/api/auth/signup", async (req, res) => {

    const { name, email, number, password } = req.body

    const emailExists = await Vendor.findOne({ email })
    if (emailExists) return res.json({status:false, message: "email already exists"})

    const salt = await genSalt(10)
    const hashPassword = await hash(password, salt)

    const vendor = new Vendor({ name, email, number, password: hashPassword })

    vendor.save()

    const token = sign({_id: vendor._id}, process.env.SECRET_TOKEN)

    res.json({status: true, token})

})

router.post("/api/auth/signin", async (req, res) => {

    const { email, password } = req.body

    const vendor = await Vendor.findOne({ email })
    if (!vendor) return res.json({status: false, message: "invalid credentials"})

    const check = await compare(password, vendor.password)
    if (!check) return res.json({status: false, message: "invalid credentials"})

    const token = sign({_id: vendor._id}, process.env.SECRET_TOKEN)

    res.json({status:true, token})

})

router.post("/api/auth/user-details", async (req, res) => {

    const { token } = req.body

    const verified = verify(token, process.env.SECRET_TOKEN)

    const user = await Vendor.findOne({_id: verified._id}, {password: 0})

    res.json({user})

})

module.exports = router

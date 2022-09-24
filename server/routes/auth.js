const router = require('express').Router()
const { hash, genSalt, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const Vendor = require('../models/Vendors')

router.post("/api/auth/signup", async (req, res) => {

    const { name, email, number, password } = req.body

    const emailExists = await Vendor.findOne({ email })
    if (emailExists) return res.status(400).send("Email already exists")

    const salt = await genSalt(10)
    const hashPassword = await hash(password, salt)

    const vendor = new Vendor({ name, email, number, password: hashPassword })

    vendor.save()

    const token = sign({_id: vendor._id}, process.env.SECRET_TOKEN)

    res.send(token)

})

router.post("/api/auth/signin", async (req, res) => {

    const { email, password } = req.body

    const vendor = await Vendor.findOne({ email })
    if (!vendor) return res.send("Invalid Credentials")

    const check = await compare(password, vendor.password)
    if (!check) return res.send("Invalid Credentials")

    const token = sign({_id: vendor._id}, process.env.SECRET_TOKEN)

    res.send(token)

})

module.exports = router

require('dotenv').config({ path: './config.env' })
require('./db')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.json())
app.use(cors())

app.use(require('./routes/vendor_auth'))
app.use(require('./routes/vendor_products'))

app.listen(process.env.PORT, () => {
    console.log('server started successfully')
})

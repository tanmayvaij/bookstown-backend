const { connect } = require('mongoose')

const options = { useNewUrlParser: true, useUnifiedTopology: true }

connect( process.env.MONGO_URI, options, (err) => {
    if (err) console.log(err)
    else console.log('database connected successfully')
} )
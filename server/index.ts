import connectDB from "./config/db"

const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')


app.use(cors())


connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
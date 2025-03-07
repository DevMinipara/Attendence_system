const express = require("express")
const mogoose = require('mongoose')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mogoose.connect("mongodb://127.0.0.1:27017/student")

app.listen(3001, () => {
    console.log("server is running")
})
const express = require("express")
const cors = require("cors")
require("dotenv").config()
require('./config/mongoose.config');
const uploadRoute = require("./routes/uploadRoute")
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
app.use(uploadRoute)

const port = process.env.port || 8000

// app.get("/", (req, res)=>{
//     res.send("Hi there")
// })


app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})
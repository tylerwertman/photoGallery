const express = require("express")
const app = express()
const port = 8000
const cors = require("cors")
const cookieParser = require('cookie-parser');

require("dotenv").config()
require('./config/mongoose.config');

app.use(cookieParser())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json(), express.urlencoded({ extended: true }));

require('./routes/user.routes')(app);
require("./routes/uploadRoute.routes")(app)

app.use(express.static("public"))


app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})
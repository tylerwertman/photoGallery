const uploadMiddleware = require('../middleware/multerMiddleware')
const uploadModel = require('../models/uploadModel')

module.exports = app => {
    app.get("/api/get", async (req, res)=>{
        const allPhotos = await uploadModel.find().sort({createdAt: "descending"})
        res.status(200).send(allPhotos)
})

app.post("/api/save", uploadMiddleware.single('photo'), (req, res) => {
    // res.send("Handling post request")
    const photo = req.file.filename
    uploadModel.create({photo})
    .then((data)=>{
        console.log("upload success", data)
        res.send(data)
    })
    .catch((err)=>console.log("err", err))
})
}


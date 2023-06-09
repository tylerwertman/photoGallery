const { Router } = require('express')
const uploadMiddleware = require('../middleware/multerMiddleware')
const uploadModel = require('../models/uploadModel')

const router = Router()

router.get("/api/get", async (req, res)=>{
    const allPhotos = await uploadModel.find().sort({createdAt: "descending"})
    res.status(200).send(allPhotos)
})

router.post("/api/save", uploadMiddleware.single('photo'), (req, res) => {
    // res.send("Handling post request")
    const photo = req.file.filename
    console.log("photo", photo)

    uploadModel.create({photo})
    .then((data)=>{
        console.log("upload success", data)
        res.send(data)
    })
    .catch((err)=>console.log("err", err))
})

module.exports = router
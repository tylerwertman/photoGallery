const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/uploads")
    },
    filname: function(req, file, cb){
        cb(null, file.originalname + '-' + Date.now())
    }
})

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/png', 'image/jpg', 'image/jpeg']
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const uploadMiddleware = multer({storage, fileFilter})


module.exports = uploadMiddleware
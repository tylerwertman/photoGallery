const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps:true})

module.exports = mongoose.model("Upload", uploadSchema)
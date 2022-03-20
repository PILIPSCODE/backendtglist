const mongoose = require('mongoose');


const UserScema = new mongoose.Schema({
    mapel:{
        type: String,
        required:true,
    },
    tugas:{
        type:String,
        required:true
    },
    userby:{
        type:String,
        default:""
    }
})

const Usermodel = mongoose.model("mahasiswa", UserScema);

module.exports = Usermodel;
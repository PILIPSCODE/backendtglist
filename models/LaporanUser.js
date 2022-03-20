const mongoose = require('mongoose');

const laporanUser = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    pesan:{
        type:String,
        required:true
    }
})

const LaporanModels = mongoose.model("LaporanUser",laporanUser);

module.exports =LaporanModels;
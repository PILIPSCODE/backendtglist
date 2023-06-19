const mongoose = require('mongoose')

const todoSchema =  new mongoose.Schema({
    todo:{
        require:true,
        type:String,

    },
    userby:{
        type:String,
        default:''
    },
    selesai:false

})

const Todoo = mongoose.model('todo-list',todoSchema)

module.exports = Todoo
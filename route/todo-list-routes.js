const router = require("express").Router();
const TodoList = require('../models/todo-list')



router.get('/',(req,res) => {
    TodoList.find((err,data) => {
        if(err) console.log(err)
        res.json(data)
    })
})


router.get("/:id", (req,res) => {
    TodoList.findById(req.params.id,(err,data) => {
       if(err) console.log(err)
       res.json(data)
    })
  })

router.post('/', (req,res) => {
  const taks = new TodoList(req.body)
  taks.save((err,data) => {
     if(err) console.log(err)
     res.json(data)
  })
})


router.put('/:id' , (req,res) => {
  TodoList.findOneAndUpdate({
     _id : req.params.id
  },req.body,{
     new: true
  }, (err,data) => {
     if(err) console.log(err)
     res.json(data)
  })
})


router.delete("/:id",(req,res) => {
  TodoList.findByIdAndDelete(req.params.id, (err,data) => {
     if(err) console.log(err)
     res.json(data)
  })
})











module.exports = router
const express = require('express');
 const router = express.Router();
 const Usermodel = require('../models/Users')
 const Laporan = require('../models/LaporanUser')


 router.get("/", (req,res) => {
     Usermodel.find((err,data) => {
        
        if(err) console.log(err)
        res.json(data)
     })
   })

 router.get("/:id", (req,res) => {
     Usermodel.findById(req.params.id,(err,data) => {
        if(err) console.log(err)
        res.json(data)
     })
   })

router.post('/', (req,res) => {
   const taks = new Usermodel(req.body)
   taks.save((err,data) => {
      if(err) console.log(err)
      res.json(data)
   })
})


router.put('/:id' , (req,res) => {
   Usermodel.findOneAndUpdate({
      _id : req.params.id
   },req.body,{
      new: true
   }, (err,data) => {
      if(err) console.log(err)
      res.json(data)
   })
})


router.delete("/:id",(req,res) => {
   Usermodel.findByIdAndDelete(req.params.id, (err,data) => {
      if(err) console.log(err)
      res.json(data)
   })
})

// laporanUser
router.post("/laporanUser",(req,res) => {
   const lap = new Laporan(req.body)
   lap.save((err,data)=> {
      if(err) console.log(err)
      res.json(data)
   })
})




module.exports = router;
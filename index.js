const express = require('express');
const app = express();
const router = require('./route/routes')
require('dotenv').config()
const Conection = require('./models/db')
const cors =require('cors')
const userRoutes = require("./route/sign");
const authRoutes = require("./route/login");

app.use(express.json());
app.use(cors());

Conection()

app.use("/api/dataklean", userRoutes);
app.use("/api/dataklean", authRoutes);
app.use('/api/dataklean' , router)



// app.post("/createUsers", async (req,res) => {
//     const user = req.body
//     const newUser = new Usermodel(user);
//     await newUser.save();
//     res.json(user);
// })


const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`server running in ${port} `)
})

const express = require('express');
const app = express();
const router = require('./route/routes')
require('dotenv').config()
const Conection = require('./models/db')
const http = require('http')
const server =http.createServer(app)
const {Server} =require("socket.io")
const cors =require('cors')
const userRoutes = require("./route/sign");
const authRoutes = require("./route/login");
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

Conection()

app.use("/api/dataklean", userRoutes);
app.use("/api/dataklean", authRoutes);
app.use('/api/dataklean' , router)

const io = new Server(server,{
    cors:{
        origin:"https://tugaslist.netlify.app/",
        methods:["GET","POST"]
    },
})

let userOnline = 1;
// connection
io.on("connection", (socket) => {
    console.log("user connected to socket" + socket.id);


    userOnline++;
    io.emit("userOnline",userOnline)
    socket.on("join",(data) => {
       socket.join(data)
       console.log("user join roomGlobal" + socket.id)
   })
   
   socket.on("sendMessage" ,(data) => {
    socket.to(data.room).emit("reciveMessage",data)
   })

// disconnect
    socket.on("disconnect", () => {
        userOnline--;
       io.emit("userOnline",userOnline)
        console.log("user disconnect "+ socket.id);
    });
    })




server.listen(port,() => {
    console.log(`server running in ${port} `)
})

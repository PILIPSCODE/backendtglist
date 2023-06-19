const express = require('express');
const app = express();
const router = require('./route/routes')
require('dotenv').config()
const Conection = require('./models/db')
const http = require('http')
const server =http.createServer(app)
const cors =require('cors')
const userRoutes = require("./route/sign");
const authRoutes = require("./route/login");
const TodoRoutes = require('./route/todo-list-routes')
const port = process.env.PORT || 3001;
const path = require('path');
app.use(express.json());
app.use(cors());

Conection()

app.use("/api/dataklean/todo",TodoRoutes);
app.use("/api/dataklean", userRoutes);
app.use("/api/dataklean", authRoutes);
app.use('/api/dataklean' , router)


server.listen(port,() => {
    console.log(`server running in ${port} `)
})

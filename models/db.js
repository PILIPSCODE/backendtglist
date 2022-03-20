const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.DB,connectionParams);
        console.log('success Conection to MongoDb')
    } catch (error) {
        console.log(error);
        console.log("cannot Connect to Mongodb")
    }
}
// mongodb+srv://Pilips529:Pilips529@cluster0.lqfqg.mongodb.net/pilips?retryWrites=true&w=majority
// mongodb://localhost:27017/pilips


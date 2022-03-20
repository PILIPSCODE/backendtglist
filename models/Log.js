const mongoose = require("mongoose");

const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});


const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().label("First Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };











// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken')
// const Joi = require("joi")
// const passwordComplexity = require('joi-password-complexity')

// const LogScema = new mongoose.Schema({
//     name:{type:String,required:true},
//     email:{type:String,required:true},
//     password:{type:String,required:true}
// })

// LogScema.method.generateAuthToken = function (){
//     const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"7d"})
//     return token
// }


// const User = mongoose.model("LogRegOut",LogScema);
// const validate =(data) => {
//     const scema =Joi.object({
//         name:Joi.string().required().label('YourName'),
//         email:Joi.string().email().required().label('YourEmail'),
//         password:passwordComplexity().required().label('YourPassword')
//     });
//     return scema.validate(data)
// };

// module.exports = {User,validate}
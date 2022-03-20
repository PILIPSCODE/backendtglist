const router = require("express").Router();
const { User, validate } = require("../models/Log");
const bcrypt = require("bcrypt");

router.post("/sign", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;


















// const express = require('express');
// const route = express.Router()
// const {validate, User} = require('../models/Log')
// const bycrypt = require('bcrypt')





// route.post("/", async (req,res) => {
//     try {
//        const {eror} = validate(req.body);
//        if(eror)
//        return res.status(400).send({message:eror.details[0].message})
 
//        const user = await User.findOne({email:req.body.email});
//        if(user)
//        return res.status(409).send({message:"User with given email alreadyactive exist!!"})
 
//        const salt = await bycrypt.genSalt(Number(process.env.SALT))
//        const hashpass = await bycrypt.hash(req.body.password,salt);
 
//        await new User ({...req.body,password:hashpass}).save();
//        res.status(201).send({message:"user created succesfully"})
//     } catch (error) {
//        res.status(500).send({message:"internal server eror"})
//     }
//  })

//  module.exports= route;
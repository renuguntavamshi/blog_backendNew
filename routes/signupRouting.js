const express = require('express');
const Signup = require('../models/singupModel');
const signupRouting = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const loginMiddleware = require('../middlewares/loginMiddleware');

signupRouting.post("/signup", async (req, res) => {//Posting a document to the collection 
    const { name, email, phone, address } = req.body
    try {
        let newUser = new Signup({ name, email, password: bcrypt.hashSync(req.body.password, 10), phone, address });
        let result = await newUser.save();
        res.status(201).json(result)
    }
    catch (err) {
        res.json(err)
    }
})

signupRouting.get("/signup", async (req, res) => {//Getting all the documents
    try {
        let result = await Signup.find();
        res.send(result)
    }
    catch (err) {
        console.log("error in Getting the data")
    }
})

signupRouting.get("/signup/:id", async (req, res) => {//Getting a single document
    try {
        let result = await Signup.findOne({ _id: req.params.id });
        res.send(result)
    }
    catch (err) {
        console.log("error in Getting the data")
    }
})

signupRouting.delete("/signup/:id", async (req, res) => {//Delete a particular document from a list of documents
    try {
        let result = await Signup.deleteOne({ _id: req.params.id });
        res.send(result)
    }
    catch (err) {
        console.log("error in Deleting the document")
    }
})

signupRouting.put("/signup/:id", async (req, res) => {//Edit a particular document from a list of documents
    try {
        let result = await Signup.updateOne({ _id: req.params.id }, { $set: req.body });
        res.send(result)
    }
    catch (err) {
        console.log("error in Updating the data")
    }
})


signupRouting.get("/adminDashboard", loginMiddleware, (req, res) => {
    res.status(200).get("Welcome to Dashboard")
})

module.exports = signupRouting;





// routes/index.js
const express = require('express');
const router = express.Router();

// Import individual route files
const loginRouting =require('./loginRouting');
const signupRouting = require('./signupRouting');
const blogRouting = require('./blogRouting');
// ... import other routes

router.get("/testAPI",(req,res)=>{//Just a trial Case
    console.log("API hit")
    res.send("API hit successfully")
})

// Combine all routes
router.use('/', loginRouting);
router.use('/', signupRouting);
router.use('/', blogRouting);//This is the api route ,it can have 1 or many endpoints inside blogRouting
// ... add other routes

module.exports = router;
const express=require('express');
const cors=require('cors');
const routes = require('./routes/index');
require('./config/config');
const app=express();
const router=express.Router()

//Middlewares
app.use(cors())
app.use(express.json());
app.use(express.static("public"));


// Load all routes (just one line!)
app.use('/',routes );     


//Server listening
app.listen(3091,()=>{
    console.log("Server is listening on port 3091")
})



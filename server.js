const express=require('express');
const cors=require('cors');
const routes = require('./routes/index');
require('./config/config');
const app=express();
const path = require('path');
const router=express.Router()

//Middlewares
app.use(cors())
app.use(express.json());
app.use('/uploads', express.static('public/uploads'));

// Load all routes (just one line!)
app.use('/',routes );     

// Test route to verify files are accessible
app.get('/test-image', (req, res) => {
  res.send(`
    <h1>Image Test</h1>
    <img src="/uploads/1749911757693-happiness.jpegtest.jpg" alt="Test Image">
  `);
});
//Server listening
app.listen(3091,()=>{
    console.log("Server is listening on port 3091")
})



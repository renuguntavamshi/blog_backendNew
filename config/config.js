
const mongoose=require('mongoose');
let con=mongoose.connect(process.env.MONGO_URI);
if(con){
    console.log("Server is connected to database")
}
else{
    console.log("Error in connecting server to database");
    
}

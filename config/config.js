
const mongoose=require('mongoose');
let con=mongoose.connect("mongodb+srv://vamshikrishna5038:0FvB9P8yBvz3PLzI@blogbackend16.ekuphyh.mongodb.net/?retryWrites=true&w=majority&appName=BlogBackend16");
if(con){
    console.log("Server is connected to database")
}
else{
    console.log("Error in connecting server to database");
    
}

const mongoose=require('mongoose');
let blogSchema=new mongoose.Schema({
    blog_category:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:true
    },
    blogtitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    publishedBy:{
            type:String,
            required:true
        }
    

})
module.exports=mongoose.model("blogs",blogSchema)
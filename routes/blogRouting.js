const express = require('express');
const Blog = require('../models/blogModel');
const blogRouting = express.Router();
const { storage } = require('../cloudinary'); // path to cloudinary config
let multer = require('multer');


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })

const upload = multer({ storage })

blogRouting.post("/blog",upload.single("image"),async (req,res)=>{
let {filename,path}=req.file;
let {blogtitle,description,publishedBy,blog_category}=req.body;
console.log(req.file,req.body)
    let newlyCreatedBlog=   new Blog({
      path,
      filename,
      blogtitle,
      description,
      publishedBy,
      blog_category});
 let result= await newlyCreatedBlog.save()
 console.log(result);
 res.send(result)
})

blogRouting.get("/blog", async (req, res) => {
  try {
    let result = await Blog.find();
    console.log(result);
    res.send(result);
  }
  catch {
    res.send({ msg: "Error in Fetching data from file" })
  }
})

blogRouting.delete("/blog/:id", async (req, res) => {
  try {

    let result = await Blog.deleteOne({ _id: req.params.id });
    console.log(result)
    res.send(req.params.id);
    console.log("Delete blog message");


  }
  catch {
    res.send({ msg: "Error in Fetching data from file" })
  }
})

blogRouting.get("/blog/:id", async (req, res) => {
  try {
    console.log(req.params.id)
    let result = await Blog.findOne({ _id: req.params.id });
    console.log(result)
    res.send(result);
    console.log(`${req.params.id} sent`);

  }
  catch {
    res.send({ msg: "Error in Fetching data from file" })
  }
})

blogRouting.put("/blog/:id", upload.single("image"), async (req, res) => {
  try {
    const { blogtitle, description, publishedBy, blog_category } = req.body;
    const updateData = {
      blogtitle,
      description,
      publishedBy,
      blog_category,
    };

    if (req.file) {
      updateData.filename = req.file.filename;
    }

    const result = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
console.log(result,"results")
    if (!result) return res.status(404).json({ message: "Blog not found" });

    res.json({ message: "Blog updated successfully", data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = blogRouting;
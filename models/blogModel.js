const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  blog_category: {
    type: String,
    required: true
  },
  imageUrl: { // Full hosted URL
    type: String,
    required: true
  },
  filename: { // Optional: original file name from Cloudinary
    type: String
  },
  blogtitle: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  publishedBy: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("blogs", blogSchema);

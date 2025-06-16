const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dmxyc8fyr',
  api_key: '165468962592958',
  api_secret: 'xBDzAwQgdYhkbTxPKeE9KgLHlG4'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blogImages', // Folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg']
  }
});

module.exports = { cloudinary, storage };

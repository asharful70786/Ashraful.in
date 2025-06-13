import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //check and make 
    if (!fs.existsSync('public/uploads')) {
      fs.mkdirSync('public/uploads', { recursive: true });
    }
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `image-${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });
export default upload;
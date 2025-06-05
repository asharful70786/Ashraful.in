import express from 'express';
import cors from 'cors';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import Review from './model/reviewModel.js';
import sendEmail from './services/nodeMailerServices.js';
import User from './model/userModel.js';
import checkAuth from './middleWare/checkAuthMiddleWare.js';
import Skill from './model/skillModel.js';
import multer from 'multer';
import path from 'path';
import upload from './middleWare/multterMiddleWare.js';
import { fileURLToPath } from 'url';

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


connectDb();
const app = express();

app.use(cookieParser("Ashraful secret key"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use('/resume', express.static(path.join(__dirname, 'public')));


app.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching skills' });
  }
});

// Post a skill with image
app.post('/skill-post', checkAuth, upload.single('image'), async (req, res) => {
  const { title, description } = req.body;
  const image = `/uploads/${req.file.filename}`;
  try {
    const skill = await Skill.create({ title, description, image });
    res.status(200).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating skill' });
  }
});

// Update skill
app.patch('/skill-update/:id', checkAuth, async (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;
  try {
    const skill = await Skill.findByIdAndUpdate(id, {
      title,
      description,
      image,
    }, { new: true });
    res.status(200).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating skill' });
  }
});

// ========== Review Routes ==========

// Get all reviews
app.get('/review', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
});

// Post a review (hardcoded image)
app.post('/review-post', checkAuth, async (req, res) => {
  const { name, rating, comment } = req.body;
  const imageUrl = "https://tse3.mm.bing.net/th?id=OIP.hAsejLTrxIbqGc6JCsdNCwHaEK&pid=Api&P=0&h=180";
  try {
    const review = await Review.create({
      name,
      picture: imageUrl,
      rating,
      comment,
    });
    res.status(200).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating review' });
  }
});

// Update a review
app.patch('/review/:id', checkAuth, async (req, res) => {
  const { id } = req.params;
  const { name, picture, rating, comment } = req.body;
  try {
    const review = await Review.findByIdAndUpdate(id, {
      name,
      picture,
      rating,
      comment,
    }, { new: true });
    res.status(200).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating review' });
  }
});


app.post("/contact-email", async (req, res) => {
  const { email, name, subject, message } = req.body;
  try {
    await sendEmail(email, name, subject, message);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: 'Invalid email or password' });
    }
    if (user.password !== password) {
      return res.status(403).json({ message: 'Invalid email or password' });
    }
    if (user.role !== "admin") {
      return res.status(401).json({ message: 'Unauthorized, only admin can login' });
    }

    res.cookie('sid', user.id, {
      httpOnly: true,
      signed: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: false, // true in production
    });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

app.post('/logout', (req, res) => {
  try {
    res.clearCookie('sid');
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error logging out' });
  }
});


app.get("/resume-file", async (req, res) => {
  try {
    const action = req.query.action;
    const resumePath = path.join(__dirname, "../public/resume.pdf");

    if (action === "download") {
      return res.download(resumePath);
    } else {
      return res.sendFile(resumePath);
    }
  } catch (error) {
    return res.status(500).json({ message: "Error sending resume" });
  }
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

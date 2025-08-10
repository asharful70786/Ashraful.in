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
import dotenv from 'dotenv';
import Project from './model/projectModel.js';
import bcrypt from 'bcrypt';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


await connectDb();
const app = express();

app.use(cookieParser("Ashraful secret key"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  'https://ashraful.in',
  'https://www.ashraful.in',
   "localhost:5173"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));


app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use('/resume', express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
  res.send("vercel deploy");
});

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
app.post('/skill-post', checkAuth, async (req, res) => {
  const { category, icon, skills } = req.body;
  try {
    const skill = await Skill.create({ category, icon, skills });
    res.status(200).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating skill' });
  }
});

// Update skill
app.patch('/skill-update/:id', checkAuth, async (req, res) => {
  const { id } = req.params;
  const { category, icon, skills } = req.body;
  try {
    const skill = await Skill.findByIdAndUpdate(
      id,
      { category, icon, skills },
      { new: true }
    );
    res.status(200).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating skill' });
  }
});

// Delete skill
app.delete('/skill-delete/:id', checkAuth, async (req, res) => {
  const { id } = req.params;
  try {
    await Skill.findByIdAndDelete(id);
    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting skill' });
  }
});

app.get('/', async (req, res) => {
  res.send("vercel deploy");
})

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
app.post('/review-post', upload.single('picture'), async (req, res) => {
  const { name, rating, comment } = req.body;
  // Save only relative public path in DB
  const imagePath = `/uploads/${req.file.filename}`;

  try {
    const review = await Review.create({
      name,
      picture: imagePath,
      rating,
      comment,
    });
    res.status(200).json(review);
  } catch (error) {
    console.error(error);
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting uploaded file:', err);
      });
    }
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

app.post('/login-admin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: 'Invalid email or password' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(403).json({ message: 'Invalid email or password' });
    }

    if (user.role !== "admin") {
      return res.status(401).json({ message: 'Unauthorized, only admin can login' });
    }

    res.cookie('sid', user.id, {
      httpOnly: true,
      signed: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: false
    });

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

app.post('/logout-admin', (req, res) => {
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
    return res.status(500).json({ message: "Error sending resume file", error });
  }
});

// ========== Project Routes ==========
// Get all projects
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching projects" });
  }
});

// Post a project
app.post("/project", checkAuth, async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const project = await Project.create({
      title,
      description,
      image,
    });
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating project" });
  }
});

// Update a project
app.patch("/project-update/:id", checkAuth, async (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;
  try {
    const project = await Project.findByIdAndUpdate(id, {
      title,
      description,
      image,
    }, { new: true });
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating project" });
  }
});

app.get('/check-auth', checkAuth, (req, res) => {
  res.status(200).json({ message: 'Authenticated' });
});

app.post("/subscribe-email", async (req, res) => {
  let { email, name, subject, message } = req.body;
  try {
    name = email.split('@')[0];
    subject = "SubScribe  NewsLetter";
    message = `Hello ${name},\n\nThank you for subscribing to my portfolio. I will update you with the latest news and updates.`;
    await sendEmail(email, name, subject, message);
    res.status(200).json({ message: message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

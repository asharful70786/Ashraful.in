import express from 'express';
import cors from 'cors';
import connectDb from './config/db.js';


connectDb();
const app = express();
app.use(express.json());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true
  }
));





app.get('/review', (req, res) => {
  res.send('Hello from the server!');

})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
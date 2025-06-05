import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: 'https://tse3.mm.bing.net/th?id=OIP.3IsXMskZyheEWqtE3Dr7JwHaGe&pid=Api&P=0&h=180',
  },
  rating: {
    type: Number,
    default: 3,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
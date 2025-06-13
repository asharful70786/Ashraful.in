import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    default: 'https://tse1.mm.bing.net/th?id=OIP.52T8HHBWh6b0dwrG6tSpVQHaFe&pid=Api&P=0&h=180',
  },
  rating: {
    type: Number,
    default: 4,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
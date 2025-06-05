import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://tse1.mm.bing.net/th?id=OIP.FiIduLgaAGVKIVZjLzQxlwHaEK&pid=Api&P=0&h=180",
  },
});

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
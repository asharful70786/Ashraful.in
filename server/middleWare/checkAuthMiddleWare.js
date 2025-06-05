import User from "../model/userModel.js";

async function checkAuth() {
  const { sid } = req.cookies;
  if (!sid) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const user = await User.findOne({ _id: sid });
    if (!user) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    console.log(`error on checkAuth ${error}`);
    res.status(401).json({ message: "Unauthorized", error });
  }
}

export default checkAuth;
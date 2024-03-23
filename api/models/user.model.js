import mongoose from "mongoose";

const userScehema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, //no one can have same username
    },
    email: {
      type: String,
      required: true,
      unique: true, //no one can have same username
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png",
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userScehema);
export default User;

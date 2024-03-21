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
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userScehema);
export default User;

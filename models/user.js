const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // firstName: {
    //   type: String,
    //   required: true,
    // },
    // lastName: {
    //   type: String,
    //   required: true,
    // },
        userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // posts: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Post",
    //     required: true,
    //   },
    // ],
    // bio: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

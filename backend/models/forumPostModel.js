const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const forumPostSchema = new Schema(
  {
    discussionId: {
      type: Schema.Types.ObjectId,
      ref: "Discussion",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ForumPost", forumPostSchema);

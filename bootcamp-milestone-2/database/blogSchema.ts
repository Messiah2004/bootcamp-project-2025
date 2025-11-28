import mongoose, { Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date | string;
};

export type Blog = {
  title: string;
  slug: string;
  date: Date | string;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: IComment[];
};

const commentSchema = new Schema<IComment>(
  {
    user: { type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: true, default: Date.now },
  },
  { _id: false }
);

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  date: { type: Date, required: true, default: Date.now },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  comments: { type: [commentSchema], default: [] },
});

const BlogModel =
  mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default BlogModel;

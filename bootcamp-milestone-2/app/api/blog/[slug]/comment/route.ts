import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

type CommentBody = {
  user?: string;
  comment?: string;
};

export async function POST(req: NextRequest) {
  await connectDB();

  const url = new URL(req.url);
  const segments = url.pathname.split("/").filter(Boolean);

  const slug = segments[2];

  if (!slug) {
    return NextResponse.json(
      { message: "Missing slug in route" },
      { status: 400 }
    );
  }

  let body: CommentBody;
  try {
    body = (await req.json()) as CommentBody;
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const user = (body.user ?? "").toString().trim();
  const commentText = (body.comment ?? "").toString().trim();

  if (!user || !commentText) {
    return NextResponse.json(
      { message: "User and comment are required" },
      { status: 400 }
    );
  }

  const newComment = {
    user,
    comment: commentText,
    time: new Date(),
  };

  try {
    const updatedBlog = await BlogModel.findOneAndUpdate(
      { slug },
      { $push: { comments: newComment } },
      { new: true }
    ).lean();

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Comment added", comment: newComment },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

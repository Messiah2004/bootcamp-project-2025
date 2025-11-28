import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import BlogModel from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  const { slug } = params;

  try {
    await connectDB();

    const blog = await BlogModel.findOne({ slug }).lean();
    if (!blog) {
      return NextResponse.json("Blog not found.", { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (err) {
    console.error("Error fetching blog by slug:", err);
    return NextResponse.json("Server error.", { status: 500 });
  }
}

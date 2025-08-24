import { NextResponse } from "next/server";
import { getPostBySlug } from "@/utils/notionApi";

interface Params {
  slug: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const post = await getPostBySlug(params.slug);
    if (!post)
      return NextResponse.json({ error: "Post not found" }, { status: 404 });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/utils/notionApi";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  try {
    const posts = await getPublishedPosts(category ?? "All posts");
    return NextResponse.json(posts);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

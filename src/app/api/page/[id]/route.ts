import { NextResponse } from "next/server";
import { getPostById } from "@/utils/notionApi";

interface Params {
  id: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
  const { id } = params;

  try {
    const recordMap = await getPostById(id);

    if (!recordMap) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(recordMap);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch post by id" },
      { status: 500 }
    );
  }
}

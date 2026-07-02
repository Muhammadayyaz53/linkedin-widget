import { NextResponse } from "next/server";
import { linkedInPosts } from "@/data/linkedin";

export async function GET() {
  return NextResponse.json(linkedInPosts);
}
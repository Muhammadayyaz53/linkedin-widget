import { NextResponse } from "next/server";
import { reviews } from "@/data/reviews";

export async function GET() {
  return NextResponse.json(reviews);
}
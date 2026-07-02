import { LinkedInPosts } from "@/types/linkedin";

export async function getLinkedInPosts(): Promise<LinkedInPosts> {
  const response = await fetch("/api/linkedin");

  if (!response.ok) {
    throw new Error("Failed to fetch LinkedIn posts.");
  }

  return response.json();
}
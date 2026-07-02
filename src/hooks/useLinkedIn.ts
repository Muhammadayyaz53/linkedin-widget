"use client";

import { useEffect, useState } from "react";
import { getLinkedInPosts } from "@/services/linkedin.service";
import { LinkedInPosts } from "@/types/linkedin";

export function useLinkedIn() {
  const [posts, setPosts] = useState<LinkedInPosts>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getLinkedInPosts();
        setPosts(data);
      } catch {
        setError("Failed to load LinkedIn posts.");
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return {
    posts,
    loading,
    error,
  };
}
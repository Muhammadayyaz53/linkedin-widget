"use client";

import { useState, useMemo } from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/data/reviews";

const STAR_OPTIONS = [5, 4, 3, 2, 1] as const;

export default function GoogleReviews() {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeFilter === null
        ? reviews
        : reviews.filter((r) => r.rating === activeFilter),
    [activeFilter]
  );

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <section className="mx-auto max-w-7xl px-4">
      {/* Summary bar */}
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold text-gray-900">
            {avgRating.toFixed(1)}
          </span>
          <span className="mb-1 text-lg text-yellow-500">
            {"★".repeat(Math.round(avgRating))}
            {"☆".repeat(5 - Math.round(avgRating))}
          </span>
        </div>
        <p className="text-sm text-gray-400">
          Based on {reviews.length} reviews
        </p>
      </div>

      {/* Filter pills */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveFilter(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
            activeFilter === null
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {STAR_OPTIONS.map((star) => (
          <button
            key={star}
            onClick={() => setActiveFilter(activeFilter === star ? null : star)}
            className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              activeFilter === star
                ? "bg-yellow-400 text-gray-900 shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span className="text-yellow-500">★</span> {star}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-16 text-center text-gray-400">
          No reviews for this rating.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </section>
  );
}

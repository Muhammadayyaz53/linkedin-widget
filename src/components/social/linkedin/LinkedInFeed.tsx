"use client";

import { useState } from "react";
import LinkedInEmbed from "./LinkedInEmbed";
import { useLinkedIn } from "@/hooks/useLinkedIn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LinkedInFeed() {
  const { posts, loading, error } = useLinkedIn();

  const [activeIndex, setActiveIndex] = useState(0);

  if (loading) {
    return (
      <div className="py-10 text-center text-gray-500">
        Loading LinkedIn posts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="relative">
      <p className="mb-4 text-center text-sm text-gray-500">
        {activeIndex + 1} / {posts.length}
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-gray-200 hover:shadow-lg transition-shadow">
              <LinkedInEmbed
                url={post.url}
                height={500}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
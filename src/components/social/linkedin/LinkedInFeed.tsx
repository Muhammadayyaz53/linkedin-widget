"use client";

import { useState } from "react";
import LinkedInEmbed from "./LinkedInEmbed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const posts = [
  {
    id: 1,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7478117931621494785?collapsed=1",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7410379078807064577?collapsed=1",
  },
  {
    id: 3,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7408187565691875328?collapsed=1",
  },
  {
    id: 4,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7445521979878760448?collapsed=1",
  },
  {
    id: 5,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7459869035514527744",
  },
  {
    id: 6,
    url: "https://www.linkedin.com/embed/feed/update/urn:li:share:7478296866778988544?collapsed=1",
  },
];

export default function LinkedInFeed() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {/* Post counter */}
      <p className="mb-4 text-center text-sm text-gray-400">
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
            <div className="overflow-hidden rounded-2xl shadow-md ring-1 ring-gray-200 transition-shadow hover:shadow-lg">
              <LinkedInEmbed url={post.url} height={500} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

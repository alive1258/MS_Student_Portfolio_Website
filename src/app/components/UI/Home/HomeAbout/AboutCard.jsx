"use client";

import SlideUp from "@/app/components/common/animations/SlideUp";
import ZoomIn from "@/app/components/common/animations/ZoomIn";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const AboutCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (item?.thumbnail_image) {
      setImageSrc(
        `${process.env.NEXT_PUBLIC_IMAGE_URL}${item.thumbnail_image}`
      );
    }
  }, [item?.thumbnail_image]);

  return (
    <div>
      {/* Description */}
      <SlideUp>
        <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-2xl">
          {item.description}
        </p>
      </SlideUp>

      {/* Thumbnail */}
      <div className="mt-12">
        <ZoomIn>
          <div
            onClick={() => setShowModal(true)}
            className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[650px] rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
          >
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={item.title || "Hero Image"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw" // Responsive loading behavior
                className="object-cover"
              />
            )}

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </ZoomIn>
      </div>

      {/* Modal with iframe */}
      {showModal && (
        <div className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center">
          <div className="relative w-[90%] md:w-[80%] h-[60vh] md:h-[80vh] bg-black rounded-xl overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute cursor-pointer top-4 right-4 text-red-700 text-4xl z-50"
              onClick={() => setShowModal(false)}
              aria-label="Close Video"
            >
              &times;
            </button>

            {/* Video */}
            <iframe
              className="w-full h-full"
              src={item?.video_link}
              title="About Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutCard;

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { rawTestimonials } from "../data/rawTestimonials";

// Double the data for smooth looping
const testimonials = [...rawTestimonials, ...rawTestimonials];

export default function Testimonials() {
  // 1. Create a reference to control the swiper
  const swiperRef = useRef(null);

  // 2. State to track the "real" index (0-7)
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper to handle dot clicks
  const handleDotClick = (index) => {
    if (swiperRef.current) {
      // slideToLoop allows us to jump to the correct slide in the loop
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    <section id="reviews" className="bg-black z-[2]">
      <div className="min-h-[1000px] w-full py-20 relative text-white overflow-hidden flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-10 relative z-10 px-4">
          <h2 className="text-white text-[50px] md:text-[60px] georgia-pro-light leading-[1.1] [text-shadow:0_0_10px_rgba(255,255,255,0.8)] tracking-[-0.02em] mb-4">
            Hear <span className="italic">from</span> our partners
          </h2>
          <p className="text-white/60 font-body font-light text-[16px] poppins-light">
            With over 60 clients served, here's what they have to say
          </p>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-12 relative z-10">
          <Swiper
            // Save the instance to our ref
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            // Update state whenever slide changes
            onRealIndexChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            modules={[EffectCoverflow, Navigation]} // Removed Pagination module
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={90}
            slidesPerView={1.5}
            coverflowEffect={{
              rotate: 0,
              stretch: -120,
              depth: 400,
              modifier: 1,
              slideShadows: false, // We handle dimming via CSS
            }}
            navigation={true}
            className="testimonial-swiper !overflow-visible"
            style={{ paddingBottom: "3rem", paddingTop: "2rem" }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide
                // Unique key for the duplicated array
                key={`${item.id}-${index}`}
                className="w-[50%] md:w-[800px] !flex items-center justify-center transition-all duration-500"
              >
                {/* Card Content */}
                <div className="bg-[rgb(15,15,15)] border border-white/10 poppins-light shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.1)] rounded-[24px] p-6 md:p-10 w-full h-[350px] md:h-[400px] flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
                  {/* Image Section */}
                  <div className="relative w-full md:w-[350px] h-[200px] md:h-full flex-shrink-0 rounded-[16px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col justify-center text-left flex-1 relative z-10 h-full font-body">
                    <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed mb-4 poppins-light">
                      "{item.quote}"
                    </p>
                    <div className="mt-auto flex justify-between items-end pt-4">
                      <div>
                        <h4 className="text-white text-[18px] font-medium">
                          {item.name}
                        </h4>
                        <p className="text-white/40 text-[14px] mt-1">
                          {item.role}
                        </p>
                      </div>
                      {/* Logo/Company Label */}
                      <div className="flex items-center gap-2">
                        <span className="text-white/30 text-xs font-bold tracking-widest uppercase">
                          {item.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- CUSTOM PAGINATION --- */}
          {/* We map rawTestimonials (4 items), not testimonials (8 items) */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center items-center gap-2 z-50 h-10">
            {rawTestimonials.map((_, index) => {
              // The Magic: Swiper's realIndex goes 0-7 because of duplicates.
              // We use modulo (%) to map it back to 0-3.
              // e.g., if activeIndex is 4, 4 % 4 = 0 (first dot).
              const isActive = activeIndex % rawTestimonials.length === index;

              return (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-500 rounded-full cursor-pointer ${
                    isActive
                      ? "w-[5px] h-[5px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] opacity-100"
                      : "w-[5px] h-[5px] bg-white opacity-20 hover:opacity-50 hover:scale-110"
                  }`}
                />
              );
            })}
          </div>
        </div>

        <style jsx global>{`
          /* Slide Styling */
          .swiper-slide {
            opacity: 0.3;
            filter: blur(2px); /* Blur inactive slides */
            transition: all 0.5s ease;
          }
          .swiper-slide-active {
            opacity: 1;
            filter: blur(0px);
            z-index: 10;
          }

          /* Navigation Buttons */
          .swiper-button-prev,
          .swiper-button-next {
            background-color: rgba(255, 255, 255, 0.05);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            padding: 15px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            transition: 0.3s;
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 18px;
          }
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }

          .swiper-button-prev {
            left: 10% !important;
          }
          .swiper-button-next {
            right: 10% !important;
          }

          @media (max-width: 768px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

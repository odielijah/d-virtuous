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
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
    // FIX 1: Added 'overflow-hidden' here. This stops the page from scrolling horizontally.
    <section id="reviews" className="bg-black z-[2] w-full overflow-hidden">
      <div className="min-h-[800px] md:min-h-[1000px] w-full relative text-white flex flex-col justify-center py-20">
        
        {/* Header */}
        <div className="text-center mb-10 relative z-10 px-4">
          {/* Responsive Text Size */}
          <h2 className="text-white text-[36px] md:text-[60px] georgia-pro-light leading-[1.1] [text-shadow:0_0_10px_rgba(255,255,255,0.8)] tracking-[-0.02em] mb-4">
            Hear <span className="italic">from</span> our partners
          </h2>
          <p className="text-white/60 font-body font-light text-[14px] md:text-[16px] poppins-light">
            With over 60 clients served, here's what they have to say
          </p>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-12 relative z-10">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onRealIndexChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            modules={[EffectCoverflow, Navigation]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            
            // FIX 2: Breakpoints are essential. 
            // Mobile = 1 slide (Full width, no glitching).
            // Desktop = 1.5 slides (Your original looping design).
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20, // Smaller gap for mobile
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 90,
                coverflowEffect: {
                  rotate: 0,
                  stretch: -120,
                  depth: 400,
                  modifier: 1,
                  slideShadows: false,
                }
              }
            }}

            navigation={true}
            
            // FIX 3: Mobile = overflow-hidden (Contained). Desktop = visible (Pop-out effect).
            className="testimonial-swiper overflow-hidden md:!overflow-visible"
            style={{ paddingBottom: "3rem", paddingTop: "2rem" }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide
                key={`${item.id}-${index}`}
                // FIX 4: Responsive Widths. 
                // Mobile = w-full (Fits screen). Desktop = w-[800px] (Fixed size).
                className="!flex items-center opacity-30 justify-center blur-[2px] transition-all duration-500 w-full"
              >
                {/* Card Content */}
                <div 
                  className="
                    bg-[rgb(15,15,15)] border border-white/10 poppins-light 
                    shadow-[inset_0px_1px_2px_0px_rgba(255,255,255,0.1)] rounded-[24px] 
                    
                    /* Responsive Layout */
                    flex flex-col md:flex-row 
                    w-full h-auto md:h-[400px] 
                    p-6 md:p-10 gap-6 md:gap-8 
                    
                    items-center relative overflow-hidden
                  "
                >
                  {/* Image Section */}
                  <div 
                    className="
                      relative flex-shrink-0 rounded-[16px] overflow-hidden
                      w-full h-[220px] md:w-[350px] md:h-full
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col justify-center text-left flex-1 relative z-10 h-full font-body w-full">
                    <p className="text-white/70 text-[14px] md:text-[16px] leading-relaxed mb-4 poppins-light">
                      "{item.quote}"
                    </p>
                    <div className="mt-auto flex justify-between items-end pt-4 border-t border-white/5 md:border-none">
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
          <div className="absolute bottom-0 left-0 w-full flex justify-center items-center gap-2 z-50 h-10">
            {rawTestimonials.map((_, index) => {
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
            left: 2% !important; /* Adjusted for better positioning */
          }
          .swiper-button-next {
            right: 2% !important; /* Adjusted for better positioning */
          }

          @media (max-width: 768px) {
            .swiper-button-prev,
            .swiper-button-next {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
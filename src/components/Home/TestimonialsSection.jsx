import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      easing: "ease-in-out",
      once: true,       // animate only once
      mirror: false,    // do not repeat on scroll up
    });
  }, []);

  return (
    <section className="bg-white dark:bg-black px-4 py-16 transition-colors">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Side */}
        <div data-aos="fade-right" data-aos-delay="100">
          <div className="mb-4 flex space-x-2" data-aos="fade-right" data-aos-delay="200">
            {/* Line with primary color */}
            <span className="w-6 h-px bg-primary rotate-135 mt-3"></span>

            {/* Subtitle */}
            <span className="text-light uppercase text-sm tracking-widest font-bold">
              raving reviews
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug dark:text-dark text-white"
              data-aos="fade-up" data-aos-delay="300">
            THOUSANDS OF <br />HAPPY DRIVERS
          </h2>

          {/* Rating Box */}
          <div className="flex items-center gap-4 mt-2 md:mt-0" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-5 py-2 rounded-full bg-white dark:bg-black">
              {/* Stars */}
              <div className="flex text-yellow-400 text-sm space-x-1">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Score */}
              <span className="text-light text-sm">4.7/5 from</span>

              {/* Reviews */}
              <span className="px-3 py-1 rounded-full text-light text-xs">
                84+ Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Right Side (Optional: Add Image or Testimonials Carousel) */}
        <div data-aos="fade-left" data-aos-delay="500">
          {/* You can add testimonial cards or an image here */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

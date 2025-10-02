import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      easing: 'ease-in-out',
      once: true, // Only animate once
    });
  }, []);

  return (
    <section 
      className="dark:bg-black bg-white px-4 py-16 md:py-24 transition-colors"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Side */}
        <div data-aos="fade-right">
          <p className="text-lg uppercase text-gray-800 dark:text-white tracking-widest mb-2">
            / About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 leading-snug">
            FOUR DECADES<br />IN THE GAME
          </h2>
          <p className="text-black dark:text-white text-sm mb-6 max-w-md">
            Receive exceptional service and unparalleled skill with every repair.
          </p>

          {/* Badge Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8" data-aos="zoom-in" data-aos-delay="200">
            <div className="flex items-center gap-2 text-sm font-semibold dark:text-white text-black">
              <FaArrowRight className="bg-rating text-black rounded-sm p-1 w-5 h-5" />
              Reliable Work
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold dark:text-white text-black">
              <FaArrowRight className="bg-rating text-black rounded-sm p-1 w-5 h-5" />
              Trusted Technicians
            </div>
          </div>

          {/* Learn More Button */}
          <button
            className="dark:bg-white bg-black text-black dark:text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FaArrowRight className="text-primary" />
            <span className="text-white dark:text-black">LEARN MORE</span>
          </button>

          {/* Testimonial */}
          <div className="mt-10 text-md dark:text-white text-black" data-aos="fade-up" data-aos-delay="400">
            <p className="italic mb-2">
              "Fast delivery and outstanding results. Thank you!"
            </p>
            <p className="text-black dark:text-white font-medium">Sim B</p>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="relative" data-aos="fade-left">
          <div className="relative z-10 rounded-lg shadow-lg">
            <img
              src="/logo.png"
              alt="Spray Work"
              className="w-full object-cover rounded-sm"
            />

            {/* Right full border */}
            <div className="absolute top-0 right-0 h-full w-[15px] bg-gradient-to-b from-transparent to-[var(--color-rating)]"></div>

            {/* Bottom fixed half-border */}
            <div className="absolute bottom-0 left-0 w-full h-[15px] bg-gradient-to-r from-transparent to-[var(--color-rating)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

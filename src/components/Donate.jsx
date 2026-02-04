import React from "react";
import { motion } from "framer-motion";

export default function Donate() {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="donate"
      className="w-full bg-black z-[2] relative py-32 max-lg:py-10 text-white"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="w-full max-w-[1560px] mx-auto px-6 flex flex-col items-center text-center z-10 px-4"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-white text-[60px] max-lg:text-[35px] georgia-pro-light leading-[1] [text-shadow:0_0_10px_rgba(255,255,255,0.8)] tracking-[-0.02em] mb-2"
        >
          Donate?
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-white/50 text-[14px] max-w-[250px] mx-auto poppins-light"
        >
          Any amount goes a long way
        </motion.p>
        <motion.div 
        variants={itemVariants}
        className="inline-block max-w-[1300px] h-[500px] px-10 py-4 w-full bg-[#ce2017] text-black rounded-[30px] poppins font-medium text-[16px] my-10 max-md:mb-0"></motion.div>
      </motion.div>
    </section>
  );
}

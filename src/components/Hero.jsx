import dayjs from "dayjs";
import { useState, useEffect } from "react";
import heroImage from "../assets/images/hero-image.avif";
import { easeInOut, motion } from "framer-motion";

export default function Hero() {
  // Display Time
  function useCurrentTime() {
    // 1. Initialize state as an object so we can split the data
    const [timeData, setTimeData] = useState({
      time: dayjs().format("h:mm"),
      period: dayjs().format("A"),
    });

    useEffect(() => {
      const intervalId = setInterval(() => {
        // 2. Update both parts separately
        setTimeData({
          time: dayjs().format("h:mm"),
          period: dayjs().format("A"),
        });
      }, 1000); // Check every second (cleaner for clock sync) or keep 60000
      return () => clearInterval(intervalId);
    }, []);

    return timeData;
  }

  // 3. Destructure the values here
  const { time, period } = useCurrentTime();

  // Display Day
  function useCurrentDay() {
    const [day, setDay] = useState(dayjs().format("ddd"));
    useEffect(() => {
      const intervalId = setInterval(
        () => setDay(dayjs().format("ddd")),
        60000,
      );
      return () => clearInterval(intervalId);
    }, []);
    return day;
  }
  const day = useCurrentDay();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="hero"
      className="p-[32px] bg-white sticky pointer-events-none flex flex-col flex-none items-center gap-[32px] z-[2] w-full h-screen max-h-[1000px] top-0 overflow-hidden
      max-xl:p-[16px] max-lg:max-h-[645px]"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut }}
        id="rounded-container"
        className="z-[1] relative overflow-hidden max-w-[1536px] rounded-[16px] bg-[radial-gradient(60%_100%_at_50%_0%,_#A551FF_0%,_#5800B7_100%)] flex flex-col flex-[1_0_0] items-center w-full h-full p-0 pointer-events-auto"
      >
        <div
          id="waves"
          className="absolute inset-[-172px_0_0] z-[1] flex-none overflow-visible opacity-50 [mask:linear-gradient(#000_47%,_#0000_156%)] [-webkit-mask:linear-gradient(#000_47%,_#0000_156%)]"
        >
          <div id="hero-img-container" className="absolute inset-0"></div>
        </div>

        <div
          id="hero-text-content"
          className="flex max-md:text-white pointer-events-none mt-[5rem] text-white justify-center text-center items-center flex-col h-full gap-[8px] w-full opacity-90 z-[2] relative"
        >
          <h1
            className="georgia-pro-semibold xl:text-[60px] max-w-[600px] mx-auto capitalize leading-[1.1]
          md:text-[40px] min-[300px]:text-[30px] mb-[20px]"
          >
            be part of something bigger
          </h1>
          <p className="sora text-[20px] max-md:text-[16px] mx-auto max-w-[600px] mb-[20px]">
            Together, we can restore hope, rebuild lives, and create lasting
            change where it’s needed most.
          </p>
          <div class="flex flex-wrap justify-center gap-10 p-6 mb-[2rem]">
            <div class="w-55 h-55 bg-white rounded-[20px] shadow-md"></div>
            <div class="w-55 h-55 bg-white rounded-[20px] shadow-md"></div>
            <div class="w-55 h-55 bg-white rounded-[20px] shadow-md"></div>
            <div class="w-55 h-55 bg-white rounded-[20px] shadow-md"></div>
            <div class="w-55 h-55 bg-white rounded-[20px] shadow-md"></div>
          </div>
          <button className="sora border-1 text-[22px] py-3 px-12 rounded-[13px]">
            Donate
          </button>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          id="time"
          className="absolute bottom-[24px] z-[1] left-[24px] sora-light text-[14px] max-[500px]:text-[12px] text-white"
        >
          {/* Render time, then render period in a conditional span */}
          {time}<span className="max-[500px]:hidden lowercase">{period}</span>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          id="scroll-to-explore"
          className="absolute bottom-[24px] z-[1] sora-light text-[14px] bg-clip-text text-transparent 
          bg-[linear-gradient(to_right,rgba(255,255,255,0.5)_20%,#fff_50%,rgba(255,255,255,0.5)_80%)] 
          bg-[length:200%_auto] 
          animate-shimmer"
        >
          Scroll to Explore
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          id="day"
          className="absolute bottom-[24px] right-[24px] z-[1] sora-light text-[14px] max-[500px]:text-[12px] text-white"
        >
          {day}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

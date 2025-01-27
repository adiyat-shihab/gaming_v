"use client";
import { motion } from "motion/react";
import * as React from "react";

const InfBar = () => {
  return (
    <div>
      <h1 className={"  text-[#1DED83] -mt-2 font-light"}>Hub</h1>
      <div className={"flex items-center gap-2 "}>
        <div
          className={" w-[3.5rem] h-[0.125rem] opacity-50 bg-[#1DED83]"}
        ></div>
        <div className={" w-[1.1975rem] h-[0.125rem] bg-[#1DED83] -ml-4"}></div>
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: [0, 20, 0],
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={" w-[0.0625rem] h-[0.125rem] bg-[#1DED83]"}
        ></motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: [0, 20, 0],
            transition: {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={" w-[0.0625rem] h-[0.125rem] bg-[#1DED83]"}
        ></motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: [0, -20, 0],
            transition: {
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={" w-[0.0625rem] h-[0.125rem] bg-[#1DED83]"}
        ></motion.div>
      </div>
      <p className={"text-[#F75049] text-[0.25rem] opacity-50 mt-2"}>
        ONLY CC35 CERTIFIED AND DHSF 5TH CLASS OFFICERS ARE <br />
        ALLOWED TO MANIPULATE, ACCESS OR DISABLE THESE DEVICE
      </p>
    </div>
  );
};

export default InfBar;

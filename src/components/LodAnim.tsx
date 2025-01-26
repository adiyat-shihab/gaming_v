"use client";
import { motion } from "motion/react";
import * as React from "react";

const LodAnim = () => {
  return (
    <div
      className={
        "w-[13.875rem] h-[0.375rem] border flex items-center border-[#F75049]"
      }
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: [0, 187, 0],
          transition: {
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className={"bg-[#F75049] w-[2rem] h-[0.125rem]"}
      ></motion.div>
    </div>
  );
};

export default LodAnim;

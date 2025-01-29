import * as React from "react";
import Image from "next/image";
import InfBar from "@/components/atoms/InfBar";
import LodAnim from "@/components/atoms/LodAnim";

const BotHubLay = () => {
  return (
    <div className={" w-full  z-20 bg-transparent "}>
      <div className={"px-20 pb-10"}>
        <div className={" flex justify-center"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[1800px] h-auto rotate-180 "
            width="928"
            height="16"
            viewBox="0 0 928 16"
            fill="none"
          >
            <path
              opacity="0.3"
              d="M0 1H150L163.5 14.5H795.5L809 1H928"
              stroke="#F75049"
              strokeWidth="0.9"
            />
          </svg>
        </div>
        <div className={"w-full "}>
          <p
            className={
              "text-[#F75049]  w-full  text-[0.75rem] -mt-5 text-center opacity-50 "
            }
          >
            ARASAKA CONSUMER TECHNOLOGY ONLY CC35 CERTIFIED, CORE TEAM MEMBERS
            AND DHSF 5TH CLASS OFFICERS ARE ALLOWED TO MANIPULATE, ACCESS OR
            DISABLE THESE DEVICE
          </p>
        </div>
      </div>
    </div>
  );
};

export default BotHubLay;

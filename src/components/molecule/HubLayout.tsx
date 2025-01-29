import * as React from "react";
import Image from "next/image";
import LodAnim from "@/components/atoms/LodAnim";
import InfBar from "@/components/atoms/InfBar";

const HubLayout = () => {
  return (
    <div className={"px-20 py-6"}>
      <div className={"flex justify-between"}>
        <div className={"flex items-start gap-3"}>
          <div
            className={
              "border border-[#1DED83]  p-1 mb-4 mb- ml-2 w-fit  rotate-45"
            }
          >
            <Image
              src={"/bookshelf.png"}
              className={"-rotate-45"}
              alt={"hub"}
              width={24}
              height={24}
            />
          </div>

          <div>
            <InfBar />
          </div>
        </div>
        {/*<div className={"w-1/5 relative"}>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    placeholder={"shihsb"}*/}
        {/*    className={*/}
        {/*      "outline-none border-[#F75049] border h-full w-full  bg-transparent "*/}
        {/*    }*/}
        {/*  />*/}
        {/*  <div*/}
        {/*    className={*/}
        {/*      "border-t border-[#F75049] bg-transparent w-5 h-6 absolute rotate-[45deg] -left-3 -bottom-3  "*/}
        {/*    }*/}
        {/*  ></div>*/}
        {/*</div>*/}
        <div className={"relative"}>
          <svg
            width="426"
            height="46"
            viewBox="0 0 426 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M401 1H0.5V32L27 45.5H425.5V15.5L401 1Z"
              stroke="#F75049"
              opacity="0.3"
            />
          </svg>
          <input
            type="text"
            placeholder={"Search Games..."}
            className={
              "  absolute top-1  w-[23rem]  placeholder:uppercase h-10 left-8 outline-none"
            }
          />
        </div>
        <div>
          <p className={"text-[#F75049] text-end"}>pages</p>
          <LodAnim />
        </div>
      </div>

      <div className={" flex justify-center"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[1800px] h-auto"
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
      <div className={"flex justify-end"}>
        <p
          className={
            "text-[#F75049] text-end w-fit -mt-4  text-[0.25rem] opacity-50 "
          }
        >
          ONLY CC35 CERTIFIED AND DHSF 5TH CLASS OFFICERS ARE <br />
          ALLOWED TO MANIPULATE, ACCESS OR DISABLE THESE DEVICE
        </p>
      </div>
    </div>
  );
};

export default HubLayout;

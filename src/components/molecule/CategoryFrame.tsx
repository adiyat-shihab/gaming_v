import * as React from "react";

import Link from "next/link";

const CategoryFrame = ({ title, index }: { title: string; index: number }) => {
  return (
    <div className={"relative w-fit h-fit"}>
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 747 691"
        width="350"
        height="350"
      >
        <path
          id="&lt;Compound Path&gt;"
          opacity=".5"
          fill="#F75049"
          fillRule="evenodd"
          d="m675 690.1h-614.9v-527.3l-59.6-59.7v-102.1h288.2l45.2 45.2h341.1v130.8l71.3 69.3v250.6l-0.5 0.5-70.8 70.8zm-611.9-3h608.9v-120.1l71.3-71.3v-248.1l-71.3-69.4v-129h-339.3l-45.3-45.2h-283.9v97.9l59.6 59.6z"
        />
      </svg>
      <div
        className={
          "absolute top-1/2 left-1/2 -translate-x-1/2 w-fit -translate-y-1/2  "
        }
        style={{
          clipPath: "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)",
        }}
      >
        {index === 7 ? (
          <input
            style={{
              clipPath:
                "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)",
            }}
            className="w-[230px] h-[60px] px-10 border outline-none  border-red-500  cursor-pointer relative text-[0.85rem] uppercase text-red-400k clip-cyber"
            type="text"
            placeholder="Search..."
          />
        ) : (
          <Link href={`/games/${title}`}>
            <button
              style={{
                clipPath:
                  "polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0)",
              }}
              className="w-[230px] h-[60px] border-0 outline-none bg-red-500 cursor-pointer relative text-[0.85rem] uppercase text-red-400k clip-cyber"
            >
              <span className="flex items-center justify-center text-2xl absolute inset-[2px] bg-cyber-yellow clip-cyber">
                {title}
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CategoryFrame;

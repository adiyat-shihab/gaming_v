import * as React from "react";
import { signIn } from "@/auth";
import "./style.css";
const Page = () => {
  return (
    <div className={"h-screen"}>
      <div
        className="  absolute h-80 w-[80vw] top-0  "
        style={{
          background:
            "radial-gradient( 50.3% 50.08% at 50% 50.23%, #F75049 6%, #0000 100% )",
          filter: "blur(220px)",
        }}
      ></div>
      <div className="wrapper ">
        <form
          className="form "
          action={async (formData) => {
            "use server";
            await signIn("nodemailer", formData);
          }}
        >
          <span className="title uppercase">Login</span>
          <div className="input-container">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="gradient-stroke"
                  x1={0}
                  y1={0}
                  x2={24}
                  y2={24}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="black" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              </defs>
              <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                <path d="M21.6365 5H3L12.2275 12.3636L21.6365 5Z" />
                <path d="M16.5 11.5L22.5 6.5V17L16.5 11.5Z" />
                <path d="M8 11.5L2 6.5V17L8 11.5Z" />
                <path d="M9.5 12.5L2.81805 18.5002H21.6362L15 12.5L12 15L9.5 12.5Z" />
              </g>
            </svg>
            <input
              className="input uppercase"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="login-button">
            <button type="submit" className={"input"}>
              SignIn
            </button>
          </div>
          <div className="texture" />
        </form>
      </div>
    </div>
  );
};

export default Page;

import Image from "next/image";
import { GlitchCounter } from "@/components/GlitchCounter";

export default function Home() {
  return (
    <>
      <div
        className="  absolute h-80 w-[80vw] top-0 "
        style={{
          background:
            "radial-gradient( 50.3% 50.08% at 50% 50.23%, #F75049 6%, #0000 100% )",
          filter: "blur(220px)",
        }}
      ></div>

      <h1 className={"text-7xl"}>Hello, Next.js!</h1>
    </>
  );
}

import "./globals.css";
import localFont from "next/font/local";
import HubLayout from "@/components/molecule/HubLayout";
import Frame from "@/components/atoms/frame";
import BotFrameLay from "@/components/molecule/BotFrameLay";
import { SpeedInsights } from "@vercel/speed-insights/next";

const blenderProFont = localFont({
  src: "./fonts/blenderPro.woff2",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` relative cursor-[url(./cursor.png), _default] ${blenderProFont.className} text-white bg-black antialiased uppercase`}
      >
        <Frame style={"fixed left-0 top-0"} />
        <HubLayout />
        <div
          className="  fixed h-80 w-[80vw] top-0 -z-10 "
          style={{
            background:
              "radial-gradient( 50.3% 50.08% at 50% 50.23%, #F75049 6%, #0000 100% )",
            filter: "blur(220px)",
          }}
        ></div>
        <div className={"px-20 py-10"}>{children}</div>
        <Frame style={"fixed right-0 top-0 rotate-180 h-screen"} />
        <BotFrameLay />
        <SpeedInsights />
      </body>
    </html>
  );
}

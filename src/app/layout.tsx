import "./globals.css";
import localFont from "next/font/local";
import HubLayout from "@/components/HubLayout";
import Frame from "@/components/frame";

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
        className={` relative ${blenderProFont.className} text-white bg-black antialiased uppercase`}
      >
        <Frame style={"absolute left-0 top-0"} />
        <HubLayout />

        <div className={"px-20 py-10"}>{children}</div>
        <Frame style={"absolute right-0 top-0 rotate-180"} />
      </body>
    </html>
  );
}

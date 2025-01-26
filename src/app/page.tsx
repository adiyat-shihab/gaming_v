import Image from "next/image";
import { GlitchCounter } from "@/components/GlitchCounter";
import twitchToken from "../lib/twitchToken";

export default async function Home() {
  const token = await twitchToken();
  const fetchGames = await fetch("https://api.igdb.com/v4/games", {
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID ?? "",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: `
      fields name, release_dates.date, hypes, cover.image_id, cover.url; 
      where release_dates.date >= ${Math.floor(Date.now() / 1000)}; 
      sort hypes desc; 
      limit 5;
    `,
    cache: "force-cache",
    next: {
      revalidate: 86400,
    },
  });
  const gamesResult = await fetchGames.json();
  console.log(gamesResult);
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

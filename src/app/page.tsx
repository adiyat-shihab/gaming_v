import Image from "next/image";
import { GlitchCounter } from "@/components/atoms/GlitchCounter";
import twitchToken from "../lib/twitchToken";
import CategoryFrame from "@/components/molecule/CategoryFrame";
import igdb from "igdb-api-node";

export default async function Home() {
  const genre = [
    "Trending",
    "Fighting",
    "Shooter",
    "Role-Playing(RPG)",
    "Adventure",
    "Racing",
    "Simulator",
    "Search",
  ];

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
      limit 18;
    `,
    next: {
      revalidate: 540000,
    },
  });
  const upcomingGames = await fetchGames.json();
  const client = igdb(process.env.TWITCH_CLIENT_ID, token);
  const response = await client
    .fields([
      "cover.image_id",
      "cover.url",
      "hypes",
      "release_dates.date",
      "name",
    ]) // Include desired fields
    .limit(18)
    .where(`release_dates.date >=  ${Math.floor(Date.now() / 1000)}`)
    .sort("hypes", "desc")
    .request("/games");
  console.log(response.data);
  return (
    <div>
      {/*<div*/}
      {/*  className="  absolute h-80 w-[80vw] top-0 "*/}
      {/*  style={{*/}
      {/*    background:*/}
      {/*      "radial-gradient( 50.3% 50.08% at 50% 50.23%, #F75049 6%, #0000 100% )",*/}
      {/*    filter: "blur(220px)",*/}
      {/*  }}*/}
      {/*></div>*/}

      <div>
        <h1 className={"text-7xl"}>Upcoming Games</h1>
        <div className={"grid-cols-6 grid gap-y-10 justify-center py-10"}>
          {response.data.map((game: object, index: number) => (
            <div
              key={index}
              className={"border-[#fb2c3680] border w-fit border-opacity-50"}
            >
              {game?.cover?.url && (
                <Image
                  src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.webp`}
                  alt={game?.name}
                  className="w-fit h-[160px]  sm:h-[300px]  "
                  width={500}
                  height={500}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/*<h1 className={"text-7xl"}>Browse by category</h1>*/}

      {/*<div className={"grid grid-cols-4 py-10 content-center gap-y-10"}>*/}
      {/*  {genre.map((item, index) => (*/}
      {/*    <CategoryFrame title={item} key={index} index={index} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
}

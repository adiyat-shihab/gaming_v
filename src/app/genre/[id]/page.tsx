import * as React from "react";
import twitchToken from "@/lib/twitchToken";
import igdb from "igdb-api-node";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const slug = (await params).id;
  const token = await twitchToken();
  const client = igdb(process.env.TWITCH_CLIENT_ID, token);
  const gameDetails = await client
    .fields(["name", "slug"])
    .limit(18)
    .where(` >=  ${Math.floor(Date.now() / 1000)}`)
    .request("/games");

  return (
    <div>
      <h1 className={"text-7xl"}>{slug}</h1>
    </div>
  );
};

export default Page;

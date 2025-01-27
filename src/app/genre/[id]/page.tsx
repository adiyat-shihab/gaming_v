import * as React from "react";
import twitchToken from "@/lib/twitchToken";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const slug = (await params).id;
  const token = await twitchToken();
  const data = await fetch(`https://api.igdb.com/v4/games`, {
    method: "POST",
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
  console.log(data);
  return (
    <div>
      <h1 className={"text-7xl"}>{slug}</h1>
    </div>
  );
};

export default Page;

import axios from "axios";

const twitchToken = async () => {
  // const token = await fetch(
  //   `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
  //   {
  //     method: "POST",
  //     next: {
  //       revalidate: 60,
  //     },
  //   },
  // );
  const { data } = await axios.post(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
  );

  return data.access_token;
};
export default twitchToken;

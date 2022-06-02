const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

const { Fourth } = require("../models");

const SaveData = async (streamerID) => {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  const getTokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  const getToken = await axios(getTokenUrl, { method: "POST" });
  const token = await getToken.data.access_token;

  try {
    const getStreamInfo = await axios(
      "https://api.twitch.tv/helix/streams?user_login=" + streamerID,
      {
        method: "GET",
        headers: {
          "Client-ID": `${clientId}`,
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const streamInfo = await getStreamInfo;
    await (streamInfoList = streamInfo.data.data[0]);
  } catch (error) {
    console.error(error);
  }
  try {
    if (streamInfoList === undefined) {
    } else {
      await Fourth.create({
        streamerId: streamInfoList.user_login,
        category: streamInfoList.game_name,
        title: streamInfoList.title,
        startedAt: streamInfoList.started_at,
      });
    }
  } catch (error) {
    console.error(error);
    console.log("데이터 없음");
  }
};

setInterval(SaveData, 60000, "hanryang1125");
setInterval(SaveData, 60000, "zilioner");
setInterval(SaveData, 60000, "rooftopcat99");
setInterval(SaveData, 60000, "109ace");

module.exports = SaveData;

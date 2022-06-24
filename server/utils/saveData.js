const axios = require('axios')
const dayjs = require('dayjs')
const dotenv = require('dotenv')
const { Fourth } = require('../models')
const timezone = require('dayjs/plugin/timezone')
const utc = require('dayjs/plugin/utc')

dotenv.config()

const SaveData = async (streamerID) => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  const clientId = process.env.CLIENT_ID
  const clientSecret = process.env.CLIENT_SECRET

  const getTokenUrl = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`
  const getToken = await axios(getTokenUrl, { method: 'POST' })
  const token = await getToken.data.access_token

  try {
    const getStreamInfo = await axios('https://api.twitch.tv/helix/streams?user_login=' + streamerID, {
      method: 'GET',
      headers: {
        'Client-ID': `${clientId}`,
        Authorization: `Bearer ${token}`,
      },
    })
    const streamInfo = await getStreamInfo
    let streamInfoList = streamInfo.data.data[0]

    const streaminfoData = await Fourth.findAll({
      where: { streamerId: streamerID },
      attributes: ['category', 'title'],
      raw: true,
    })

    if ((await streamInfoList) === undefined) {
    } else if (
      (await streamInfoList.game_name) !== (await streaminfoData[streaminfoData.length - 1]?.category) ||
      (await streamInfoList.title) !== (await streaminfoData[streaminfoData.length - 1]?.title)
    ) {
      Fourth.create({
        streamerId: streamInfoList.user_login,
        category: streamInfoList.game_name,
        title: streamInfoList.title,
        startedAt: `${dayjs().tz('Asia/Seoul').format('YYYY-MM-DD')}`,
      })
    }
  } catch (error) {
    console.error(error)
  }
}

setInterval(SaveData, 60000, 'zilioner')
setInterval(SaveData, 60000, 'hanryang1125')
setInterval(SaveData, 60000, 'yagubu')
setInterval(SaveData, 60000, 'kss7749')
setInterval(SaveData, 60000, 'rooftopcat')

module.exports = SaveData

import { axios } from 'hooks/worker'

export const getStream = (streamerId: string | undefined, pickedDate: string | undefined) =>
  axios.get(`http://localhost:3065/api/streaminfo/${streamerId}/${pickedDate}`)

export const getOnAirDay = (streamerId: string | undefined) =>
  axios.get(`http://localhost:3065/api/onairday/${streamerId}`)

import { axios } from 'hooks/worker'

export const getStream = (streamerId: string | undefined, pickedDate: string | undefined) =>
  axios.get(`/apiurl/api/streaminfo/${streamerId}/${pickedDate}`)

export const getOnAirDay = (streamerId: string | undefined) => axios.get(`/apiurl/api/onairday/${streamerId}`)

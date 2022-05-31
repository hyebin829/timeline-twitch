import { axios } from 'hooks/worker'

interface Params {
  streamerId: string | undefined
  pickedDate: string | undefined
}

export const getStream = (streamerId: string | undefined, pickedDate: string | undefined) =>
  axios.get(`http://localhost:3065/api/streaminfo/${streamerId}/${pickedDate}`)

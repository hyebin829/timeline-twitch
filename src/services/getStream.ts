import { axios } from 'hooks/worker'

// const BASE_URL = '//ec2-43-200-124-60.ap-northeast-2.compute.amazonaws.com:3065'

export const getStream = (streamerId: string | undefined, pickedDate: string | undefined) =>
  axios.get(`/api/api/streaminfo/${streamerId}/${pickedDate}`)

export const getOnAirDay = (streamerId: string | undefined) => axios.get(`/api/api/onairday/${streamerId}`)

import { axios } from 'hooks/worker'

interface Params {
  id: string
  date: string
}

export const getStream = (params: Params) => {
  axios.get('http://localhost:3065/api/streaminfo', {
    params: {
      ...params,
    },
  })
}

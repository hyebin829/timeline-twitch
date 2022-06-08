import { atom } from 'recoil'

export const StreamerState = atom<string | undefined>({
  key: '#streamerState',
  default: '',
})

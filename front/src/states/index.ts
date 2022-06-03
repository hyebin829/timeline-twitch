import dayjs from 'dayjs'
import { atom } from 'recoil'
import { IStreamInfo } from 'types'

export const TimelineState = atom<IStreamInfo[]>({
  key: '#timelineState',
  default: [],
})

export const SelectedDateState = atom<string | undefined>({
  key: '#selectedDateState',
  default: dayjs().format('YYYY-MM-DD'),
})

export const StreamerState = atom<string | undefined>({
  key: '#streamerState',
  default: '',
})

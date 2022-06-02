import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'

import { useRecoil } from 'hooks/state'
import { getStream } from 'services/getStream'
import { StreamerState, TimelineState } from 'states'

const Timeline = () => {
  const [timeline, setTimeline] = useRecoil(TimelineState)
  const [, setFavoriteStreamer] = useRecoil(StreamerState)

  const params = useParams()
  const streamerId = params.id
  const selectedDate = params.date
  useEffect(() => {
    setFavoriteStreamer(streamerId)
  }, [setFavoriteStreamer, streamerId])

  useMount(() => {
    getStream(streamerId, selectedDate).then((res) => setTimeline(res.data))
  })

  const { data } = useQuery(
    ['getStreaminfo', streamerId, selectedDate],
    () => getStream(streamerId, selectedDate).then((res) => res.data),
    {
      refetchOnWindowFocus: true,
      cacheTime: 30 * 60 * 1000,
      onSuccess: () => {
        setTimeline(data)
      },
      onError: () => {},
    }
  )

  useEffect(() => {
    setTimeline(data)
  }, [setTimeline, data])

  return (
    <div>
      {timeline?.length === 0 && <div>자료가 없습니다. 스트리머 아이디 또는 날짜를 확인해주세요.</div>}
      {timeline &&
        timeline.map((item) => (
          <ol key={`${item.title}-${item.category}`}>
            <li>{item.category}</li>
            <li>{item.title}</li>
            <li>{item.createdAt} 시작</li>
          </ol>
        ))}
    </div>
  )
}

export default Timeline

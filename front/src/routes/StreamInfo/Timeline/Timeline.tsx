import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'

import { useRecoil } from 'hooks/state'
import { getStream } from 'services/getStream'
import { StreamerState, TimelineState } from 'states'

import styles from './timeline.module.scss'

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
    <ol className={styles.timelineWrapper}>
      {timeline?.length === 0 && (
        <div className={styles.noData}>
          자료가 없습니다. <br />
          스트리머 아이디 또는 날짜를 바르게 입력해주세요.
        </div>
      )}
      {timeline &&
        timeline.map((item) => (
          <li className={styles.timelineList} key={`${item.title}-${item.category}`}>
            <ul className={styles.streamInfo}>
              <li className={styles.category}>{item.category}</li>
              <li className={styles.title}>{item.title}</li>
              <li className={styles.start}>started at {item.createdAt}</li>
            </ul>
          </li>
        ))}
    </ol>
  )
}

export default Timeline

import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import Calendar, { CalendarTileProperties } from 'react-calendar'
import dayjs from 'dayjs'

import { getOnAirDay } from 'services/getStream'

import { FiCalendar, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import styles from './selectDate.module.scss'
import './calendar.scss'
import FavoriteButton from '../FavoriteButton'

const SelectDate = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const calendarToggle = () => {
    setIsCalendarVisible((prev) => !prev)
  }
  const navigate = useNavigate()
  const params = useParams()
  const streamerId = params.id
  const selectedDate = params.date
  const defaultDate = dayjs(selectedDate).isValid()
    ? dayjs(selectedDate).format('YYYY,M,D')
    : dayjs().format('YYYY,M,D')
  const [onAirArray, setOnAirArray] = useState([])

  useMount(() => {
    getOnAirDay(streamerId).then((res) => setOnAirArray(res.data))
  })

  const tilecontent = ({ date }: CalendarTileProperties) => {
    if (onAirArray?.find((x: string) => x === dayjs(date).format('YYYY-MM-DD'))) return <div className='highlights' />
    return <div />
  }
  return (
    <>
      <div className={styles.titleWrapper}>
        <FavoriteButton />
        <span className={styles.streamerId}>{streamerId}</span>
        <button type='button' className={styles.datePicker} onClick={calendarToggle}>
          <span className={styles.icon}>
            <FiCalendar size={18} />
          </span>
          <span>{selectedDate}</span>
          <span className={styles.icon}>
            <FiChevronDown size={18} />
          </span>
        </button>
      </div>
      {isCalendarVisible && (
        <Calendar
          minDetail='month'
          maxDetail='month'
          calendarType='US'
          prevLabel={<FiChevronLeft />}
          nextLabel={<FiChevronRight />}
          formatDay={(locale, date) => dayjs(date).format('D')}
          defaultValue={new Date(defaultDate)}
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          tileContent={tilecontent}
          onChange={(value: Date) => {
            const selectDate = dayjs(value).format('YYYY-MM-DD')
            navigate(`/streaminfo/${streamerId}/${selectDate}`)
            setIsCalendarVisible(false)
          }}
        />
      )}
    </>
  )
}

export default SelectDate

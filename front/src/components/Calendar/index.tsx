import { useNavigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import Calendar from 'react-calendar'

import './selectDate.scss'

const SelectDate = () => {
  const navigate = useNavigate()
  const params = useParams()
  const streamerId = params.id
  const { date } = params
  const defaultDate = dayjs(date).isValid() ? dayjs(date).format('YYYY,M,D') : dayjs().format('YYYY,M,D')

  return (
    <Calendar
      minDetail='month'
      maxDetail='month'
      defaultValue={new Date(defaultDate)}
      showNeighboringMonth={false}
      onChange={(value: Date) => {
        const selectedDate = dayjs(value).format('YYYY-MM-DD')
        navigate(`/streaminfo/${streamerId}/${selectedDate}`)
      }}
    />
  )
}

export default SelectDate

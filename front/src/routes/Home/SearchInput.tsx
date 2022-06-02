import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

const SearchInput = () => {
  const navigate = useNavigate()
  const [streamer, setStreamer] = useState('')
  const today = dayjs().format('YYYY-MM-DD')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setStreamer(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/streaminfo/${streamer}/${today}`)
  }

  return (
    <div>
      <form action='submit' onSubmit={handleSubmit}>
        <div>스트리머의 아이디를 입력하세요</div>
        <label htmlFor='streamerId' />
        <input type='text' id='streamerId' value={streamer} onChange={handleInput} />
        <input type='submit' />
      </form>
    </div>
  )
}

export default SearchInput

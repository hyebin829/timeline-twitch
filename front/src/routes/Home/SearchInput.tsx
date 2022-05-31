import { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'

const SearchInput = () => {
  const [id, setId] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.currentTarget.value)
  }

  return (
    <div>
      <form action='submit'>
        <div>스트리머의 아이디를 입력하세요</div>
        <label htmlFor='streamerId' />
        <input type='text' id='streamerId' value={id} onChange={handleInput} />
        <button type='submit'>
          <Link to={`/streaminfo/${id}/20220531`}>검색</Link>
        </button>
      </form>
    </div>
  )
}

export default SearchInput

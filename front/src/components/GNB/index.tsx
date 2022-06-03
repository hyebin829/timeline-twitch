import { NavLink, useParams } from 'react-router-dom'
import styles from './GNB.module.scss'
import { FiHome, FiStar, FiList } from 'react-icons/fi'

import cx from 'classnames'

const GNB = () => {
  const params = useParams()
  const streamerId = params?.id
  const selectedDate = params?.date

  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <p>홈</p>
            <FiHome size={23} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/streaminfo/${streamerId}/${selectedDate}`}
            className={({ isActive }) => cx({ [styles.isActive]: isActive })}
          >
            <p>목록</p>
            <FiList size={23} />
          </NavLink>
        </li>
        <li>
          <NavLink to='/favorites' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <p>즐겨찾기</p>
            <FiStar size={23} />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GNB

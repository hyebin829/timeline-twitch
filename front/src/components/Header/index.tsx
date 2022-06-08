import styles from './header.module.scss'
import { IoLogoTwitch } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to='/'>
          Timeline
          <IoLogoTwitch size={25} className={styles.logo} />
        </Link>
      </h1>
    </header>
  )
}

export default Header

import styles from './header.module.scss'
import { IoLogoTwitch } from 'react-icons/io'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        Timeline
        <IoLogoTwitch size={25} className={styles.logo} />
      </h1>
    </header>
  )
}

export default Header

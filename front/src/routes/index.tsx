import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import GNB from 'routes/_shared/GNB'
import Home from './Home'
import StreamInfo from './StreamInfo'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <GNB />
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='streaminfo/:id/:date' element={<StreamInfo />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App

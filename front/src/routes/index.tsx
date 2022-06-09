import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import StreamInfo from './StreamInfo'
import FavoriteList from './FavoriteList'
import styles from './routes.module.scss'
import Layout from 'components/Layout'
import NotFount from './NotFound'
import { useRecoil } from 'hooks/state'
import { ThemeState } from 'states'
import { useMount } from 'react-use'

const App = () => {
  const [theme] = useRecoil(ThemeState)

  useMount(() => {
    document.documentElement.setAttribute('timeline-theme', theme)
  })

  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='streaminfo' element={<StreamInfo />} />
          <Route path='streaminfo/:id/:date' element={<StreamInfo />} />
          <Route path='favorites' element={<FavoriteList />} />
          <Route path='*' element={<NotFount />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

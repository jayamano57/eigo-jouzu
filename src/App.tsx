import './App.css'
import { Main } from './pages/main/index'
import { Notifications } from '@mantine/notifications'

function App() {
  return (
    <>
      <Notifications position="top-right" />
      <Main />
    </>
  )
}

export default App

import './App.css'
import { Sidebar, Chat } from './components'

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default App

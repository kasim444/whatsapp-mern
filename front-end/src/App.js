import Pusher from 'pusher-js'
import { useEffect, useState } from 'react'
import API from './api'
import './App.css'
import { Chat, Sidebar } from './components'

function App() {
  const [messages, setMessages] = useState([])

  const getMessages = async () => {
    await API.get('/messages/sync').then((res) => {
      setMessages(res.data)
    })
  }

  useEffect(() => {
    getMessages()
  }, [])

  useEffect(() => {
    var pusher = new Pusher('7dbc8afb19b69f06c71b', {
      cluster: 'eu',
    })

    const channel = pusher.subscribe('messages')
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App

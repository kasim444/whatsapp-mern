import { Avatar, IconButton } from '@material-ui/core'
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from '@material-ui/icons'
import React, { useState } from 'react'
import API from '../../api'
import './chat.css'

export const Chat = ({ messages }) => {
  const [message, setMessage] = useState('')

  const sendMessage = async (e) => {
    e.preventDefault()
    await API.post('messages/new', {
      message: message,
      name: 'Kasim',
      timestamp: 'just now',
      received: false,
    })
    setMessage('')
  }

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar
          alt='Remy Sharp'
          src='https://images.generated.photos/CulK8L47MyTu4Dx5vbgQf1sZLlYB0KXT6TSXLtVXEwM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNDg0MDNfMDc2/NDc3MV8wMjc3Mjk4/LmpwZw.jpg'
        />

        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        {messages.map((message) => (
          <p
            key={message._id}
            className={`chat__message ${message.received && 'chat__reciever'}`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>{new Date().toUTCString()}</span>
          </p>
        ))}
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input
            type='text'
            placeholder='Type a message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type='submit' onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  )
}

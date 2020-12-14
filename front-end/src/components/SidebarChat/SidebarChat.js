import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebar-chat.css'

export function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar
        alt='Remy Sharp'
        src='https://images.generated.photos/CulK8L47MyTu4Dx5vbgQf1sZLlYB0KXT6TSXLtVXEwM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNDg0MDNfMDc2/NDc3MV8wMjc3Mjk4/LmpwZw.jpg'
      />
      <div className='sidebarChat__info'>
        <h2>Room name</h2>
        <p>This is the last message</p>
      </div>
    </div>
  )
}

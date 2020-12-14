import React from 'react'
import './sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import { SidebarChat } from '../../components'

export function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src='https://lh3.googleusercontent.com/a-/AOh14GhAxXQtCAZfCOr58moY9rSQaCQriCF6Ap4LcylpvA=s96-c-rg-br100' />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlinedIcon />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

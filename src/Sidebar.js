import React from 'react';
import "./Sidebar.css"
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import StoreIcon from '@mui/icons-material/Store';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Avatar } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useStateValue } from './StateProvider';



function Sidebar() {
  const [{user}, dispatch] = useStateValue();


  return (
    <div className='sidebar'>
      <SidebarRow title={user.displayName}  src={user.photoURL} />
      <SidebarRow title="Covid-19 infoCenter" Icon={LocalHospitalIcon} />
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Friends" Icon={PeopleIcon} />
      <SidebarRow title="Messenger" Icon={ChatBubbleIcon} />
      <SidebarRow title="MarketPlace" Icon={StoreIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <SidebarRow title="ShowMore" Icon={ExpandMore} />
    </div>
  )
}

export default Sidebar

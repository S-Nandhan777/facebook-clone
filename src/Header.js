import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
import { useStateValue } from './StateProvider';

function Header() {
  const [{user}, dispatch] = useStateValue();


  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png' alt='' />
        
        <div className='header__input'>
          <SearchIcon/>
          <input/>
        </div>
      </div>

      <div className='header__middle'>
      <div className='header__option header__option--active'>
            <HomeIcon/>
        </div>

        <div className='header__option'>
            <FlagIcon/>
        </div>

        <div className='header__option'>
            <SubscriptionsIcon/>
        </div>

        <div className='header__option'>
            <StorefrontIcon/>
        </div>

        <div className='header__option'>
            <SupervisorAccountIcon/>
        </div>

      </div>

      <div className='header__right'>
        <div className='header__info'>
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddCircleOutlineIcon/>
        </IconButton>
        <IconButton>
          <ForumIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon/>
        </IconButton>
      </div>
    </div>
  )
}

export default Header

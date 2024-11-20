// import { Widgets } from '@mui/icons-material';
import { useState } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{user}, dispatch] = useStateValue();

  return (

    <div className="App">

      {!user ? (<Login />) :(
        <>
          <Header />
          <div className='app__body'>
            <Sidebar className="app__sidebar" />
            <Feed />
            {/* <Widgets /> */}
          </div>
        </>)
      }
     
     
    </div>


  );
}

export default App;

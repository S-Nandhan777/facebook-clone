import React, { useState } from 'react'
import "./MessageSender.css";
import { Avatar } from '@mui/material';
import { InsertEmoticon, PhotoLibrarySharp, VideocamSharp, } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase/compat/app';

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setinput] = useState('');
  const [imageUrl, setimageUrl] = useState('');


  const handleclick = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image:imageUrl,
    })


    setimageUrl('');
    setinput('');
  }

 

  return (
    <div className='messagesender'>

      <div className='messagesender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className='messagesender__input' placeholder={`What is in Your mind , ${user.displayName}`} />
          <input value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
            placeholder='image URL' />
          <button
            onClick={handleclick} type='submit'>Hidden Submit</button>
        </form>
      </div>

      <div className='messagesender__bottom'>
        <div className='messagesender__option'>
          <VideocamSharp style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className='messagesender__option'>
          <PhotoLibrarySharp style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className='messagesender__option'>
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>



      </div>
    </div>
  )
}

export default MessageSender

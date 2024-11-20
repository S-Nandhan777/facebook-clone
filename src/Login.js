import React from 'react'
import "./Login.css";
import { Button } from '@mui/material';
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        console.log(result);
      })
        .catch((error) => {
          alert(error.message)
        });
  };
  return (
    <div className='login'>
      <div className='login_logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png' alt='' />
        <img className='login__img__text__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Facebook_logo_%282023%29.svg/1024px-Facebook_logo_%282023%29.svg.png' alt='' />
      </div>
      <Button type='submit' onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login


// import React from 'react';
// import "./Login.css";
// import { Button } from '@mui/material';
// import { auth, provider } from './firebase';

// function Login() {
//   const signIn = () => {
//     auth.signInWithPopup(provider)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   return (
//     <div className='login'>
//       <div className='login_logo'>
//         <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png' alt='' />
//         <img className='login__img__text__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Facebook_logo_%282023%29.svg/1024px-Facebook_logo_%282023%29.svg.png' alt='' />
//       </div>
//       <Button type='submit' onClick={signIn}>Sign In</Button>
//     </div>
//   );
// }

// export default Login;

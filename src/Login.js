import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img src='https://firebasestorage.googleapis.com/v0/b/slack-clone-c6a4c.appspot.com/o/slack.jpg?alt=media&token=06602c89-905f-4089-9fb8-c0a5852f60e5' />
        <h1>Sign in to Slack App</h1>
        <p>clone of slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;

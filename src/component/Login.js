import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchLoginInfo } from "../actions/fetchData";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root:{
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    '& .MuiTextField-root':{
      margin: theme.spacing(1),
      width: 400
    }
  }
}))

export const Login = () => {
  const [userName, setUserName] = useState("username");
  const [password, setPassword] = useState("password");
  const [errorStatus, setErrorStatus] = useState(false)
  const [errorMsg, setErrorMsg] = useState('Please enter user name and password.')
  const loginInfo = useSelector((state) => state.loginInfo[0]);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(fetchLoginInfo());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginUser = loginInfo.user;
    const loginPass = loginInfo.password;
    if(userName !== '' && password !== '') {
      setErrorStatus(false)
      if (loginUser === userName) {
        setErrorStatus(false)
        if (loginPass === password) {
          setErrorStatus(false)
          history.push("/users");
        } else {
          setErrorStatus(true)
          setErrorMsg('Wrong password')
        }
      } else {
        setErrorStatus(true)
        setErrorMsg('Wrong user name')
      }
    } else {
      setErrorStatus(true)
    }
  };

  const classes = useStyles()

  return (
    <div className="Login">
      <h1>Log in</h1>
      {errorStatus ? (
        <p>{errorMsg}</p>
      ):null}
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField 
          required 
          id="standard-required" 
          label="User name" 
          onChange={handleChange}
          name="username"
          value={userName}
          type="text" 
        />
        <TextField 
          required 
          id="standard-required" 
          label="Password" 
          onChange={handleChange}
          name="password"
          value={password}
          type="password" 
        />
         <Button variant="contained" color="primary" type='submit'>Log in</Button>
      </form>
    </div>
  );
};

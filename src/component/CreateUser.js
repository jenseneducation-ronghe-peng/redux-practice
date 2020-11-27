import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { createNewUser } from "../actions/updateUsers";
import { useHistory } from "react-router-dom";
import { fetchUsers } from "../actions/fetchData";
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
  },
  backBtn:{
    display:'flex',
    justifyContent:'start',
  }
}))

function CreateUser() {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [errorStatus, setErrorStatus] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "username":
        setUserName(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "note":
        setNote(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: userName,
      id: new Date(),
      date: date,
      note: note,
    };
    if(userName!=='' && date !== ''){
      setErrorStatus(false)
      dispatch(createNewUser(newUser));
      dispatch(fetchUsers());
      history.push('/users')
    }else{
      setErrorStatus(true)
    }
  };
  function goBack(){
    history.push('/users')
  }

 const classes = useStyles()

  return (
    <div className="CreateUser">
      <Button variant="contained" className={classes.backBtn} onClick={goBack} >Go Back</Button>
      <h2>Add user info</h2>
      {errorStatus?(
        <p>Ops! Please fill out all the info!</p>
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
          id="date"
          label="Date" 
          onChange={handleChange}
          name="date"
          value={date}
          type="date" 
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField 
          id="outlined-helperText" 
          label="Note" 
          variant="outlined"
          onChange={handleChange}
          name="note"
          value={note}
          type="text"
        />
        <Button variant="contained" color="primary" type='submit'>Add User</Button>
      </form>
    </div>
  );
}

export default CreateUser;

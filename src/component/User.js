import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  noteDiv: {
    border: '1px solid #000000',
    borderRadius: '10px',
  },
  backBtn:{
    display:'flex',
    justifyContent:'start',
  }
})

function User() {
  const params = useParams();
  const history = useHistory()
  const classes = useStyles()
  const id = params.id;
  const userlist = useSelector((state) => state.users);
  const user = userlist.filter((u) => u.id === id);

  function goBack(){
    history.push('/users')
  }

  return (
    <div className="User">
      {user[0] !== undefined ? (
        <div>
          <Button variant="contained" className={classes.backBtn} onClick={goBack}>Go Back</Button>
        <h2>I'm {user[0].username}</h2>
      <p>{user[0].date}</p>
      <div>
        <div className={classes.noteDiv} >
        <h3>NOTE</h3>
          <p>{user[0].note}</p>
        </div>
      </div>
      </div>
      ):(
        <div>
          <h2>Ops! User dose not exist!</h2>
          <Button variant="contained" color="primary" onClick={goBack}>Go back to user list</Button>
        </div>
      ) }
    </div>
  );
}

export default User;

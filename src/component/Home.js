import React from "react";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

function Home() {
  let history = useHistory();
  function goLogin() {
    history.push("/login");
  }
  return (
    <div style={{marginTop:'200px'}}>
      <Button variant='contained' color='primary' onClick={goLogin}>Log in</Button>
    </div>
  );
}

export default Home;

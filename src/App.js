import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import { Login } from "./component/Login";
import Users from "./component/Users";
import User from "./component/User"
import CreateUser from './component/CreateUser'
import { makeStyles } from '@material-ui/core/styles';



function App() {
  const useStyles = makeStyles({
    app: {
      textAlign: 'center',
    }
  })
  const classes = useStyles()

  return (
    <div className="App">
      <div className={classes.app}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/users/create">
              <CreateUser />
            </Route>
            <Route exact path="/users/:id">
              <User />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

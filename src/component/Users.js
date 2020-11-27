import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUsers } from "../actions/fetchData";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginBottom: 30,
  },
  tableRow:{
    cursor:'pointer'
  }
})

function Users() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users);
  const classes = useStyles()

  function goUser(id) {
    history.push(`/users/${id}`);
  }
  function goCreate() {
    history.push('/users/create')
  }

  useEffect(() => {
    let userInfo = localStorage.getItem("loginInfo");
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(fetchUsers());
    }
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>USER</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Id</TableCell>
              <TableCell align='right'>Date</TableCell>
              <TableCell align='right'>Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.length !== 0 && userList.map((user) => (
              <TableRow key={user.id} onClick={() => goUser(user.id)} className={classes.tableRow}>
                <TableCell component='th' scope='row'>
                  <PersonIcon color="primary"></PersonIcon>
              </TableCell>
                <TableCell align='right'>{user.username}</TableCell>
                <TableCell align='right'>{user.id}</TableCell>
                <TableCell align='right'>{user.date}</TableCell>
                <TableCell align='right'>{user.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={goCreate}>Create new user</Button>
    </div>
  );
}

export default Users;

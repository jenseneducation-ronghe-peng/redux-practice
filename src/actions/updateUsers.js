function createNewUser(newUser) {
  const LS_KEY = "users";
  let fromLs = localStorage.getItem(LS_KEY);
  const userList = JSON.parse(fromLs);
  userList.push(newUser);
  localStorage.setItem(LS_KEY, JSON.stringify(userList));
  return function (dispatch) {
    dispatch({ type: "CREATE_USER", payload: newUser });
  };
}

export { createNewUser };

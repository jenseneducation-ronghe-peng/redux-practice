import Data from "../data/users.json";

function fetchLoginInfo() {
  return function (dispatch) {
    const LS_KEY = "loginInfo";
    let fromLs = localStorage.getItem(LS_KEY);
    if (!fromLs) {
      localStorage.setItem(LS_KEY, JSON.stringify(Data.data.login));
      fromLs = localStorage.getItem(LS_KEY);
    }
    let data = JSON.parse(fromLs);
    dispatch({ type: "FETCH_LOGIN", payload: data });
    return data;
  };
}

function fetchUsers() {
  return function (dispatch) {
    const LS_KEY = "users";
    let fromLs = localStorage.getItem(LS_KEY);
    if (!fromLs) {
      localStorage.setItem(LS_KEY, JSON.stringify(Data.data.users));
      fromLs = localStorage.getItem(LS_KEY);
    }
    let data = JSON.parse(fromLs);
    dispatch({ type: "FETCH_USERS", payload: data });
    return data;
  };
}

export { fetchLoginInfo, fetchUsers };

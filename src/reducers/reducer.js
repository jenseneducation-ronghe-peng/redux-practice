const initState = {
  loginStatus: false,
  loginInfo: {},
  users: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LOGIN":
      state = {
        ...state,
        loginInfo: action.payload,
      };
      return state;
    case "FETCH_USERS":
      state = {
        ...state,
        users: action.payload,
      };
      return state;
    case "UPDATE_LOGIN":
      state = {
        ...state,
        loginStatus: action.payload,
      };
      return state;
    case "CREATE_USER":
      state = {
        ...state,
        users: state.users + action.payload,
      };
      return state;
    default:
      return state;
  }
};

export default reducer;

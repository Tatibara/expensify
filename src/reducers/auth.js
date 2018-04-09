// Auth Reducer

const authReducerDefaultState = {};

export default (state = authReducerDefaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { uid: action.uid };
    case "LOGOUT":
      return authReducerDefaultState;
    default:
      return state;
  }
};

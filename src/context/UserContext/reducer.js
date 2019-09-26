export default (state, action) => {
  switch (action.type) {
    case "UserData":
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
};

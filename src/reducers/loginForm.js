const initialState = {
    email: "",
    password: ""
}
  
export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_LOGIN_FORM":
        return action.loginFormData
      case "RESET_LOGIN_FORM":
        return initialState
      default:
        return state
    }
}
  
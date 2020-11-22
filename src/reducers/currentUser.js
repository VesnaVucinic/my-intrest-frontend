export default (state = null, action) => {
    // null instead empty becouse to use for trouthiness check
    switch (action.type) {
      case "SET_CURRENT_USER":
        return action.user
      case "CLEAR_CURRENT_USER":
        return null
      default:
        return state
    }
}
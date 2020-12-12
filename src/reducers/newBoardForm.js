const initialState = {
    name: "",
    imageUrl: ""
  }
  
  export default (state=initialState, action) => {
    // console.log("incoming action is", action)
    switch (action.type) {
      case "UPDATE_NEW_BOARD_FORM": 
       const returnVal = {
         ...state,
         [action.formData.name]: action.formData.value
       }
      //  console.log("retrurnValue is", returnVal)
       return returnVal
      case "RESET_NEW_BOARD_FORM":
        return initialState
      default:
        return state
    }
}
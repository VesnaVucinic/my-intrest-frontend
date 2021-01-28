const initialState = {
    name: "",
    imageUrl: "",
  }
  
  export default (state=initialState, action) => {
    switch (action.type) {
      case "UPDATE_BOARD_FORM": 
       const returnVal = {
         ...state,
         [action.formData.name]: action.formData.value
       }
       return returnVal
      case "RESET_BOARD_FORM":
        return initialState
      case "SET_FORM_DATA_FOR_EDIT":
        return action.boardFormData
      default:
        return state
    }
}
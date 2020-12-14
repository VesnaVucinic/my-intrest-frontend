const initialState =[]

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_BOARDS":
            return action.boards
        case "ADD_BOARD":
            return state.concat(action.board)
        case "UPDATE_BOARD":
            console.log("in UPDATE BOARD action is", action)
            return state
        case "CLEAR_BOARDS":
            return initialState
        default:
            return state   
    }
}
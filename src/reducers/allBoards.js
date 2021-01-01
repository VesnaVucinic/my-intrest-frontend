const initialState =[]

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_All_BOARDS":
            return action.boards
        case "ADD_BOARD":
            return state.concat(action.board)
        case "ADD_BOARD_TO_MY_BOARDS":
            return state.concat(action.board)
        case "CLEAR_ALL_BOARDS":
            return initialState
        default:
            return state   
    }
}
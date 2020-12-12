const initialState =[]

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_All_BOARDS":
            return action.boards
        case "CLEAR_BOARDS":
            return initialState
        default:
            return state   
    }
}
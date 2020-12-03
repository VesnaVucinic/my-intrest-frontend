const initialState =[]

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_BOARDS":
        return action.boards
        default:
            return state   
    }
}
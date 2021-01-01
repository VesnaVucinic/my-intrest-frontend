const initialState =[]

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_BOARDS":
            return action.boards
        case "ADD_BOARD":
            return state.concat(action.board)
        case "ADD_FAVORITE_BOARD":
            return state.concat(action.board)
        case "UPDATE_BOARD":
            return state.map(board => board.id === action.board.id ? action.board : board) 
        case "DELETE_BOARD":
            //console.log( "action.boardId is ", action.boardId)
            return state.filter(board => board.id === action.boardId ? false : true)           
        case "CLEAR_BOARDS":
            return initialState
        default:
            return state   
    }
}
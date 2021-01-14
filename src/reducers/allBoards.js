const initialState =[]

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_All_BOARDS":
            return action.boards
        case "ADD_BOARD":
            return state.concat(action.board)
        case "UPDATE_BOARD":
            return state.map(board => board.id === action.board.id ? action.board : board) 
        case "LIKE_BOARD":
            return state.map(board => board.id === action.board.id ? action.board : board) 
        case "CLEAR_ALL_BOARDS":
            return initialState
        case "DELETE_BOARD":
            return state.filter(board => board.id === action.boardId ? false : true)
        default:
            return state   
    }
}
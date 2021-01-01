// import { addBoard } from "./myBoards.js"

export const addFavoriteBoard = board => {
    return {
        type: "ADD_FAVORITE_BOARD",
        board,
        // currentUser
    }
}
 

export const createFavoriteBoard = (board, history) => {
    return dispatch => {
        const token = localStorage.token
        // if(currentUser) {
        //     currentUser.id === currentUserId
        // }
        const boardData = {
            name: board.name,
            image_url: board.imageUrl,
            user_id: board.userId
        }        
        return fetch("http://127.0.0.1:3001/api/v1/boards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(boardData)
        }) 
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
            dispatch(addFavoriteBoard(resp.data))
            // add new trip to store: dispatch action by invocing that action creator with the information I need sddBoard 
            // that returns to me object I actualy despatching which will then trriger or invoke
            // all of my reducers the one I am gonna catch on is case "ADD_BOARD" where I will concate that new board to my state 
            history.push(`/boards/${resp.data.id}`)

        }
        })

        .catch(console.log)
    }
}
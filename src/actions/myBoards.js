import { resetBoardForm } from './boardForm'
// synchronous actions
export const setMyBoards = boards => {
    return {
        type: "SET_MY_BOARDS",
        boards
    }
}


export const clearBoards = () => {
    return {
      type: "CLEAR_BOARDS"
    }
}

export const addBoard = board => {
    return {
        type: "ADD_BOARD",
        board
    }
}

export const updateBoardSuccess = board => {
    return {
        type: "UPDATE_BOARD",
        board
    }
}

export const deleteBoardSuccess = boardId => {
    return {
      type: "DELETE_BOARD",
      boardId
    }
  }

// // async actions
export const getMyBoards = () => {
    console.log("hello")
    return dispatch => {
        // const token = localStorage.token    
        const token = localStorage.getItem("token")
    
        // debugger

        return fetch("http://127.0.0.1:3001/api/v1/boards",  {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token

            },
          })
          .then(response => response.json())
          .then (response => {
              console.log(response)
              if (response.error) {
                  alert(response.error)
              } else {
                  console.log(response.data)
                  dispatch(setMyBoards(response.data))
              }
              
          })
          .catch(console.log)
    }
} 

export const createBoard = (boardData, history) => {
    return dispatch => {
        const token = localStorage.token
        const sendableBoardData = {
            name: boardData.name,
            image_url: boardData.imageUrl,
            user_id: boardData.userId
        }        
        return fetch("http://127.0.0.1:3001/api/v1/boards", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(sendableBoardData)
        }) 
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
            dispatch(addBoard(resp.data))
            // add new trip to store: dispatch action by invocing that action creator with the information I need sddBoard 
            // that returns to me object I actualy despatching which will then trriger or invoke
            // all of my reducers the one I am gonna catch on is case "ADD_BOARD" where I will concarenate that new board to my state 
            dispatch(resetBoardForm())
            history.push(`/all-boards`)
            history.push(`/boards/${resp.data.id}`)

        }
        })

        .catch(console.log)
    }
}

export const updateBoard = (boardData,history) => {
    return dispatch => {
        const token = localStorage.token
        const sendableBoardData = {
            name: boardData.name,
            image_url: boardData.imageUrl,
            user_id: boardData.userId
        }        
        return fetch(`http://127.0.0.1:3001/api/v1/boards/${boardData.boardId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(sendableBoardData)
        }) 
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
            dispatch(updateBoardSuccess(resp.data))
            // add new trip to store: dispatch action by invocing that action creator with the information I need sddBoard 
            // that returns to me object I actualy despatching which will then trriger or invoke
            // all of my reducers the one I am gonna catch on is case "ADD_BOARD" where I will concarenate that new board to my state 
            history.push(`/boards/${resp.data.id}`)

            // dispatch(resetBoardForm())
        }
        })

        .catch(console.log)
    }
}

export const deleteBoard = (boardId, history) => {
    return dispatch => {
      const token = localStorage.token
      return fetch(`http://127.0.0.1:3001/api/v1/boards/${boardId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(deleteBoardSuccess(boardId))
            history.push(`/boards`)
            // go somewhere else --> board show?
            // add the new board to the store
          }
        })
        .catch(console.log)
  
    }
  
  }
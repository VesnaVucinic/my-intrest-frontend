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

export const addLikes = board => {
  return {
    type: "LIKE_BOARD",
    board
  }
}

// // async actions
export const getMyBoards = () => {
    // console.log("hello")
    return dispatch => {
        const token = localStorage.getItem("token")
        return fetch("http://127.0.0.1:3001/api/v1/boards",  {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token

            },
          })
          .then(response => response.json())
          .then (response => {
              if (response.error) {
                  alert(response.error)
              } else {
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
              // add new board to store: dispatch action by invocing that action creator with the information I need sddBoard 
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

export const updateBoard = (boardData, history) => {
  console.log(boardData)
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
              history.push(`/all-boards`)
              history.push(`/boards/${resp.data.id}`)
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

export const likeBoard = (boardData) => {
  console.log(boardData)
  const token = localStorage.token
  const updateLikeBoard = {
    ...boardData, 
    likes: boardData.attributes.likes + 1 
  }
  return dispatch => {
    return fetch(`http://127.0.0.1:3001/api/v1/boards/${boardData.id}`, {
      method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({board: updateLikeBoard })
    })
    .then(r => r.json())
    .then(response => {
      console.log(response.data)
      dispatch(addLikes(response.data))      
    })
    .catch(error => console.log(error))
  }
}
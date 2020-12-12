
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

// // async actions
export const getMyBoards = () => {
    console.log("hello")
    return dispatch => {
        const token = localStorage.token        
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




export const createBoard = boardData => {
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
        .then(console.log)
        .catch(console.log)
    }
}
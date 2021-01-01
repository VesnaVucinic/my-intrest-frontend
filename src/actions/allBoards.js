export const setAllBoards = boards => {
    return {
        type: "SET_All_BOARDS",
        boards
    }
}

export const addBoardToMyBoards = board => {
    return {
        type: "ADD_BOARD_TO_MY_BOARDS",
        board
    }
}

export const clearAllBoards = () => {
    return {
      type: "CLEAR_ALL_BOARDS"
    }
}

export const getAllBoards = () => {
    console.log("hello")
    return dispatch => {
        // debugger
        const token = localStorage.token        

        return fetch("http://127.0.0.1:3001/api/v1/all_boards",  {
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
                  dispatch(setAllBoards(response.data))
              }
              
          })
          .catch(console.log)
    }
} 

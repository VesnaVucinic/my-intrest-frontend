export const setAllBoards = boards => {
    return {
        type: "SET_All_BOARDS",
        boards
    }
}

export const clearAllBoards = () => {
    return {
      type: "CLEAR_ALL_BOARDS"
    }
}

export const getAllBoards = () => {
    return dispatch => {   
        return fetch("http://127.0.0.1:3001/api/v1/all_boards",  {
            method: "GET",
            headers: {
              "Content-Type": "application/json", 
            },
          })
          .then(response => response.json())
          .then (response => {
              if (response.error) {
                  alert(response.error)
              } else {
                  dispatch(setAllBoards(response.data))
              }
              
          })
          .catch(console.log)
    }
} 

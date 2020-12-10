
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

// // async actions
export const getMyBoards = () => {
    console.log("hello")
    return dispatch => {
        return fetch("http://127.0.0.1:3001/api/v1/boards",  {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          })
          .then(r => r.json())
          .then (response => {
              console.log(response.data)
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

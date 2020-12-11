export const setAllBoards = boards => {
    return {
        type: "SET_All_BOARDS",
        boards
    }
}

export const getAllBoards = () => {
    console.log("hello")
    return dispatch => {
        // debugger

        return fetch("http://127.0.0.1:3001/api/v1/boards",  {
            method: "GET",
            headers: {
              "Content-Type": "application/json",

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

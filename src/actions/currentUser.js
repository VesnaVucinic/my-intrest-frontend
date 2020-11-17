// synchronous action creators
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

// asynchronous action creators
export const login = credentials => {
    console.log(credentials)
    return dispatch => {
      return fetch("http://127.0.0.1:3001/api/v1/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(response =>response.json())
        .then(response =>{
            if(response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data)) 
            }
        })
        .catch(console.log)
    }
}
// synchronous action creators
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

// asynchronous action creators
export const login = (user) => {
    console.log(user)
    return dispatch => {
      return fetch("http://127.0.0.1:3002/api/v1/login", {
        // credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(response =>response.json())
        .then(response =>{
            if(response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data)) 
                localStorage.setItem('token', user.token)
            }
        })
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
  const token = localStorage.getItem("token")
    if (token) {
      return dispatch => {
        return fetch("http://127.0.0.1:3002/api/v1/get_current_user", {
          // credentials: "include",
          headers: {
            "Authorization": token
          },
          })
          .then(response => response.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {
              dispatch(setCurrentUser(response.data))
            }
          
          })
          .catch(console.log)
      }
  }
}
  
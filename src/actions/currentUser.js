import { resetLoginForm } from "./loginForm.js"

// synchronous action creators
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

// this will delete user that is in redux store
export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}
// asynchronous action creators
export const login = credentials => {
    console.log(credentials)
    return dispatch => {
      return fetch("http://127.0.0.1:3001/api/v1/login", {
        credentials: "include",
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
                dispatch(resetLoginForm())
            }
        })
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://127.0.0.1:3001/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
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

// this will cleare sessions from backend
export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
} 
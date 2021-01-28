import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getMyBoards, clearBoards } from "./myBoards.js"
import { getAllBoards } from "./allBoards.js"

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
export const login = (userInfo, history) => {
  return dispatch => {
    return fetch("http://127.0.0.1:3001/api/v1/login", {
      
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo)
    })
      .then(response =>response.json())
      .then(response =>{
          if(response.error) {
              alert(response.error)
          } else {
              console.log(response.user.data)
              localStorage.setItem('token', response.jwt)
              dispatch(setCurrentUser(response.user.data))
              dispatch(getMyBoards()) 
              dispatch(getAllBoards()) 
              dispatch(resetLoginForm())
              history.push('/')
          }
      })
      .catch(console.log)
  }
}

export const signup = (userInfo) => {
  console.log(userInfo)
  return dispatch => {
    const userCredentials = {
      user: userInfo
    }
    return fetch("http://127.0.0.1:3001/api/v1/signup", {
      
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userCredentials)
    })
      .then(response =>response.json())
      .then(response =>{
          if(response.error) {
              alert(response.error)
          } else {
              console.log(response.user.data) 
              localStorage.setItem('token', response.jwt)
              dispatch(setCurrentUser(response.user.data))
              dispatch(getMyBoards())
              dispatch(getAllBoards()) 
              dispatch(resetSignupForm())
          }
      })
      .catch(console.log)
  }
}

export const getCurrentUser = () => {
    return dispatch => {
      const token = localStorage.getItem("token")
      return fetch("http://127.0.0.1:3001/api/v1/get_current_user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer ' + token
        }, 
      })
        .then(response => response.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.user.data))
            dispatch(getMyBoards())
            dispatch(getAllBoards()) 

          }
        })
        .catch(console.log)
    }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("token")
    dispatch(clearCurrentUser())
    dispatch(clearBoards())
  }
} 

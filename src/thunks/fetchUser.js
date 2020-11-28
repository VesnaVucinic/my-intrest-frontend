import {loginUser} from '../actions/userAction'


export function loginUserFetch(userInfo){
    return dispatch=>fetch("http://127.0.0.1:3001/api/v1/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo)
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.error){
                alert(data.error)
            }else{
             let user_json = JSON.parse(data.user.data) 
             localStorage.setItem("token", data.jwt)
             dispatch(loginUser(user_json))
            }
         })
}
 



export function createUser(userinfo){
    return dispatch=>fetch("http://127.0.0.1:3001/api/v1/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userinfo)
        }).then(r=>r.json())
           .then(data=>{
           if(data.error){
               alert(data.error)
           }else{
            let user_json = JSON.parse(data.user.data)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(user_json))
           }
        })
}

export function fetchLoggedInUser(){
    return dispatch=>{
        const token = localStorage.token
        if (token) {
            return fetch("http://127.0.0.1:3001/api/v1/get_current_user", {
              method: "GET",
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `Bearer ${token}`
              }
            })
              .then(resp => resp.json())
              .then(data => {
                if (data.error) {
                    alert(data.error)
                  localStorage.removeItem("token")
                } else {
                   dispatch(loginUser(data.alertuser.data))               
                }
              })
          }
    }
}

export const loginUser = userObj => {
 return{
    type: 'LOGIN_USER',
    payload: userObj
}
}

export const logOutUser = ()=>{
  return {
    type: 'LOGOUT_USER'
  }
}
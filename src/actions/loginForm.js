export const updateLoginForm = (loginFormData) => {
    console.log(loginFormData)
    return {
      type: "UPDATE_LOGIN_FORM",
      loginFormData
    }
}

export const resetLoginForm = () => {
  return {
    type: "RESET_LOGIN_FORM"
  }
}
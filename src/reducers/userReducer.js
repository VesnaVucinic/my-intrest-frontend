const userReducer = ( state = {user: {}, login: false}, action ) => {

    switch(action.type){

        case "LOGIN_USER":
            return {
                ...state,
                user: action.payload,
                login: true
            }

        case "LOGOUT_USER":
            return {
                ...state,
                user: {},
                login: false
            }
        default:
            return state
    }
}

export default userReducer
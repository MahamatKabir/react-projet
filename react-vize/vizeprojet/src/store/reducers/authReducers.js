const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'login hatasi'
            }
        case 'LOGIN_SUCESS':
            console.log('login sucess');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCESS':
            console.log('signout sucess');
            return state
        default:
            return state

    }
}


export default authReducer;


export const signIn = (kimlik) => {
    return (dispatch,getState, {getFirebase}) => {
       const firebase = getFirebase();

       firebase.auth().signInWithEmailAndPassword(
           kimlik.email, 
           kimlik.password
           ).then(() => {
               dispatch({type:'LOGIN_SUCESS'});
           }).catch((err) =>{
               dispatch({type:'LOGIN_ERROR',err});
           })
    }
    
}

export const signOut = () => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type:'SIGNOUT_SUCESS'})
        })
    }
}
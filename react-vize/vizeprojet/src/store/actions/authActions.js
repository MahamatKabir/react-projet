export const signIn = (kimlik) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            kimlik.email,
            kimlik.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        })
    }

}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCESS' })
        })
    }
}
export const signUp = (yeni) => {//yeni uyelik için action ve redux ayarlama başlangiç
    return (dispatch, getState, {getFirebase,getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            yeni.email,
            yeni.password
        ).then((cevap) => {
            return firestore.collection('users').doc(cevap.user.uid).set({
                isim: yeni.isim,
                soyisim: yeni.soyisim,
                initials: yeni.isim[0]+yeni.soyisim[0] 
            })
        }).then(() => {
             dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
             dispatch({ type: 'SIGNUP_ERROR' , err})
        })//yeni uyelik end action partie
    }
}
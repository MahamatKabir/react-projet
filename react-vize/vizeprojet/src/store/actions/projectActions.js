export const createProject =(project) => {
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //async callback 

        const firestore = getFirestore();

        const profile=getState().firebase.profile;
        const yazarId=getState().firebase.auth.uid;


        firestore.collection('projects').add({
            ...project,
            isim: profile.isim,
            soyisim:profile.soyisim,
            yazarId: yazarId,
            olusturulmaTarihi: new Date(),

        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })

       
    }
}
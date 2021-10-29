export const createProject =(project) => {
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        //async callback 

        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            isim: 'karibou',
            soyisim:'software',
            yazarId: 12345,
            olusturulmaTarihi: new Date(),

        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })

       
    }
}
const initState={
    projects :[
        {id: '1' ,baslik:'react yazilim', icerik:'react yazilim geliştirmesi'},
        {id: '2' ,baslik:'redux yazilim', icerik:'redux yazilim geliştirmesi'},
        {id: '3' ,baslik:'firbase yazilim', ieerik:'firebase yazilim geliştirmesi'}
    ]
};

const projectReducer = (state= initState,action)=>{
    return state
}


export default projectReducer; 

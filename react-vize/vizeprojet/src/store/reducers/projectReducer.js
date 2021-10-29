const initState = {
    projects: [
        { id: '1', baslik: 'react yazilim', icerik: 'react yazilim geliştirmesi' },
        { id: '2', baslik: 'redux yazilim', icerik: 'redux yazilim geliştirmesi' },
        { id: '3', baslik: 'firbase yazilim', icerik: 'firebase yazilim geliştirmesi' }
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('projet oluşturdu', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('hata oluştu', action.err)
            return state
        default:
            return state;
    }
}


export default projectReducer;

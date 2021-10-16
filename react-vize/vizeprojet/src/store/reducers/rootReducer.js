import authReducer from "./authReducers";
import projectReducer from "./projectReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;
//here we use combine function to combine all the reducers data in one object
import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user'
import UserBioReducer from './reducer-user-bio'


//so, with users we will refer to all the data coming from reducer-users object
const allReducers = combineReducers({
    users:UserReducer,
    activeUser:ActiveUserReducer,
    userBio:UserBioReducer
});

export default allReducers;
//its job is to listen for the action of type USER_SELECTED and IMAGE_SELECTED and act upon 
//important to remember that every action that occurs gets send to all reducers (this can be limited)
//state is set to null because of the first time the user accesses the page...it is the default scenario and no user is selected
export default function (state=null,action){
    switch(action.type){
        case "USER_SELECTED":
        return action.payload;
        break;
    }
    return state;
}

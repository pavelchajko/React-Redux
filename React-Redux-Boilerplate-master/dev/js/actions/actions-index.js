//this is an action creator that returns an action
//this will be hooked up to an user event in the userlist


export const selectUser = (user)=>{
    return {
        
        type:"USER_SELECTED", 
        payload: user
    }
};

export const selectImage = (user)=>{
    return {
        type:"IMAGE_SELECTED",
        payload: user
    }
};

//its actually up to the reducer to decide how to act upon some action occurs and how that will change the data
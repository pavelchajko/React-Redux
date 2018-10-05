import React from 'react';
//require('../../scss/style.scss'); //to use styling predefined 
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';


//app is basicaly the layout of the page we are creating..UserList is a "smart" component that is being rendered
const divStyle = {
    color:'blue',
    float:'right'
}
const App = ()=>{
    return(
    <div>
        <div>
        <h2>Forwards:</h2>
        <UserList />
        <hr/>
        <h2>Details:</h2>
        <UserDetail />
        
        </div>
    </div>
   )
};

export default App;
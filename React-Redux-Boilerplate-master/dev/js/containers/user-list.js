import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/actions-index'

//in this case UserList acts as a smart component that is being rendered in the main component we have of the page: compnents->App

class UserList extends Component{

    createListItems() {
        return this.props.users.map((user) => {
            return(
            <li key = {user.id}
            onClick = {()=>this.props.selectUser(user)}>
            {user.first} {user.last}</li>
            );
            
        });
    }

    render(){
        return(
            <ul>
                {this.createListItems()}
            </ul>
        );
    }

}

//what it does is that it takes pieces of the store and passes them as properties to the component
function mapStateToProps(state){
    return {
        users: state.users
    }
}

//this helps us connect the redux app with the actions we create...we can also call the action creator directly into UserList
//and it will work but it will be improper

 //basically the prop selectUser is equal to the function selectUser
function matchDispatchToProps(dispatch){
   
    return bindActionCreators({selectUser:selectUser},dispatch)
}

//allows the connection between the state data and the UserList component
//remember that users is a variable we assigned when we combined all the reducers..it takes data from reducer-users.js
export default connect(mapStateToProps,matchDispatchToProps)(UserList);
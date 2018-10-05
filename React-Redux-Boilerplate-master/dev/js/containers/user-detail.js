import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserBio from '../containers/user-bio';
import {selectImage} from '../actions/actions-index'


class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return (<h4>Select a user! </h4>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} 
                    onClick = {()=>this.props.selectImage(this.props.user)}
                />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>{this.props.user.age}</h3>
                if(){
                    <UserBio className='user-bio'/>
                }
                
            </div>
        );
    }
}

//we have to pass the user as a property taking it from the store

function mapStateToProps(state){
    return {
        user:state.activeUser
    };
}

function matchDispatchToProps(dispatch){
   
    return bindActionCreators({selectImage:selectImage},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(UserDetail);
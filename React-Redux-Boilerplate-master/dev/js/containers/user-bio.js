import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class UserBio extends Component{
   
    render(){
        if(!this.props.user){
            return <h4></h4>
        }
        else{
            return(
                <div className="user-bio">
                <h3>Short bio:</h3>
                <p>{this.props.user.bio}</p>
                </div>
            );
        }
    }
}


function mapStateToProps(state){
    return {
        user:state.userBio
    };
}



export default connect(mapStateToProps)(UserBio);
require('./login.less');

import React from 'react';
import {connect} from 'react-redux';
import UserInput from './userInput/UserInput'
import {UserLogin} from 'actions/user';
import CompanySelect from './companySelect/CompanySelect'

 

//登录页
class Login extends React.Component{

    constructor(props){
        super(props);
    }
    loginUser=(u,p)=> {
        var userName=u,
            pwd=p;
        let {dispatch}=this.props;
        dispatch(UserLogin('/api/User/Login',{UserName:userName,PassWord:pwd},this.getFallBack));
    }
    
    render(){
        const {loginType}=this.props.loginTypes;
        return(
            <div className="loginMain">
                <div className="login-input">
                    <h2>electronic Trial Master File System</h2>
                    {loginType==='userLogin'?<UserInput login={this.loginUser}  />:<CompanySelect />}
                </div>
            </div>
        )
    }
    
}
function mapStateToProps(state){
    const { loginTypes }=state;
    return {
        loginTypes
    }
}
export default connect(mapStateToProps)(Login);
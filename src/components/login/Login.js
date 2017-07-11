require('./login.less');

import React from 'react';
import UserInput from './userInput/UserInput'
import {UserLogin} from 'actions/user';

 

//登录页
class Login extends React.Component{

    constructor(props){
        super(props);
        this.states={
            status:'loginUser'
        }
    }
    loginUser=(u,p)=> {
        var userName=u,
            pwd=p;
        const _data= UserLogin('/api/User/Login',{UserName:userName,PassWord:pwd},this.getFallBack);
        debugger;
        const companyList=_data.Result;
        console.log(_data);
        if(_data.SuccessFult){
            this.setState={
                status:'company'
            }
        }
    }
    
    render(){
        return(
            <div className="loginMain">
                <div className="login-input">
                    <h2>electronic Trial Master File System</h2>
                    {this.states.status=='loginUser'?<UserInput login={this.loginUser}  />:<CompanySelect />}
                </div>
            </div>
        )
    }
    
}

export default Login;
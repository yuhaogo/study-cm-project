require('./login.less');

import React from 'react';
import UserInput from './userInput/UserInput'

//登录页
class Login extends React.Component{


    render(){
        return(
            <div className="loginMain">
                <div className="login-input">
                    <h2>electronic Trial Master File System</h2>
                    <UserInput/>
                </div>
            </div>
        )
    }
    
}

export default Login;
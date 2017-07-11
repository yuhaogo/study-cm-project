
require('antd/lib/input/style/css');
require('antd/lib/button/style/css');
require('./userinput.less');
import React from 'react';
import {Input,Button} from 'antd';
import {UserLogin} from 'actions/user';

var userInfo={
    Username:'',
    pwd:''
}
class UserInput extends React.Component{
    handleUserChange=(e)=>{
        userInfo.Username=e.target.value;
    }
    handlePwdChange=(e)=>{
        userInfo.pwd=e.target.value;
    }
    handleClick=(e)=>{
        var userName=userInfo.Username,
            pwd=userInfo.pwd;
            
            UserLogin('/api/User/Login',{UserName:userName,PassWord:pwd});
        e.stopPropagation();
    }
    render(){
        return(
            <div className="login-info">
                <ul>
                    <li className="login-input-item"><Input onChange={this.handleUserChange} className="type-input" addonBefore={<i className="tmfont tm-icon-userportrait"></i>} placeholder="Username"  /></li>
                    <li className="login-input-item"><Input onChange={this.handlePwdChange} className="type-input" type="password"  addonBefore={<i className="tmfont tm-icon-lock"></i>} placeholder="Password"  /></li>
                    <li className="login-input-item"><Button className="type-button loging"  type="primary" onClick={this.handleClick} >Login</Button></li>
                </ul>
            </div>
        )
    }


}

export default UserInput;
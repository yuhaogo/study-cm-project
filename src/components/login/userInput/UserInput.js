
require('antd/lib/input/style/css');
require('antd/lib/button/style/css');
require('../loginMods.less');
import React from 'react';
import {Input,Button} from 'antd';

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
       this.props.login(userInfo.Username,userInfo.pwd);
        e.stopPropagation();
    }
    getFallBack=(res)=>{
        console.log(res);
    }
    render(){
        return(
            <div className="login-info">
                <ul>
                    <li className="login-input-item"><Input onChange={this.handleUserChange} className="type-input" addonBefore={<i className="tmfont tm-icon-userportrait"></i>} placeholder="Username"  /></li>
                    <li className="login-input-item"><Input onChange={this.handlePwdChange} className="type-input" type="password"  addonBefore={<i className="tmfont tm-icon-lock"></i>} placeholder="Password"  /></li>
                    <li className="login-input-item"><Button className="type-button loging"  type="primary" onClick={this.handleClick} >Loging</Button></li>
                </ul>
            </div>
        )
    }


}

export default UserInput;
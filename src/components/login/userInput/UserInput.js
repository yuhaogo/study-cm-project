
require('antd/lib/input/style/css');
require('antd/lib/button/style/css');
require('./userinput.less');
import React from 'react';
import {Input,Button} from 'antd';

class UserInput extends React.Component{

    render(){
        return(
            <div className="login-info">
                <ul>
                    <li className="login-input-item"><Input size="large" addonBefore={<i className="tmfont tm-icon-userportrait"></i>} defaultValue="Username"  /></li>
                    <li className="login-input-item"><Input size="large" addonBefore={<i className="tmfont tm-icon-lock"></i>} defaultValue="Password"  /></li>
                    <li className="login-input-item"><Button size="large" type="primary" className="loging">Login</Button></li>
                </ul>
            </div>
        )
    }


}

export default UserInput;
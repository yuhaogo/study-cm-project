require('./Login.less');

import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import UserInput from '../../components/login/userInput/UserInput'
import actions from 'actions/user';
import CompanySelect from '../../components/login/companySelect/CompanySelect';

 

//登录页
class Login extends React.Component{
    constructor(props){
        super(props);
    }
    loginUser=(u,p)=> {
        var userName=u,
            pwd=p;
        let {actions}=this.props;
            actions.UserLogin('/api/User/Login',{UserName:userName,PassWord:pwd});
    }
    render(){
        const {loginType}=this.props.loginTypes;
        return(
            <div className="loginMain">
                <div className="login-input">
                    <h2>electronic Trial Master File System</h2>
                    {loginType==='userLogin'?<UserInput login={this.loginUser}  />:<CompanySelect SelectCompany={this.props.selectCompany} options={this.props.loginTypes.companyList} />}
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
function mapDicpatchToProps(dicpatch){
    return {
        actions:bindActionCreators(actions,dicpatch)
    }
}
export default connect(mapStateToProps,mapDicpatchToProps)(Login);
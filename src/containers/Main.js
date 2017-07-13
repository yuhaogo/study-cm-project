
require('../css/main.less');
require('../font/iconfont.css');
import React from 'react';
import Login from './login/Login';
import Index from './index/Index';
import {connect} from 'react-redux';
import actions from 'actions/user';
import { bindActionCreators } from 'redux'



class AppComponent extends React.Component {

  selectCompany=(val)=> {
      var comId=val;
      let {actions}=this.props;
          actions.SelectCompany('/api/User/RefreshToken',{CompanyId:comId});
  }
  render() {
    let indexOrLogin='';
    const {SystemPostion}=this.props.loginTypes;
    const {isLogin}=this.props.loginTypes;
    indexOrLogin=isLogin?'Index':SystemPostion;
    return (
        indexOrLogin ==='Index' ? <Index />:<Login selectCompany={this.selectCompany} />
    );
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
export default connect(mapStateToProps,mapDicpatchToProps)(AppComponent);

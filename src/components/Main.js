
require('../css/main.less');
require('../css/iconfont.css');
import React from 'react';
import Login from './login/Login';



class AppComponent extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

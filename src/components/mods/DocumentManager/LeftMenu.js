require('antd/lib/Menu/style/css');
require('antd/lib/Icon/style/css');
import React from 'react';
import { Menu, Icon } from 'antd';

class LeftMenu extends React.Component{
    render(){
        return(
            <div className="menu-list">
                <Menu>
                    <Menu.Item>
                        <Icon type="schedule" />
                        <span>文档计划</span>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon type="bars" />
                        <span>我的文档</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default LeftMenu;
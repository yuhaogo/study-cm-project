require('antd/lib/Popover/style/css');
import React from 'react';
import {Popover } from 'antd';
//头部选择公司
class SelectCompany extends React.Component{
    HandleClick=(e)=>{
        
        e.stopPropagation();
    }
    render(){
        const { companyName,userName,children}=this.props;
        const content=(
                <div className="company-box">
                    {children}
                </div>
                )
        return(
            <div className="select-company">
                <Popover placement="topLeft" content={content} trigger="click">
                    <span className="company-name" onClick={this.HandleClick} >欢迎，{companyName}</span>
                </Popover>
                <span>，{userName}</span>
            </div>
        )
    }
}
export default SelectCompany;
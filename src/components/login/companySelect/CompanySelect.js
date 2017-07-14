require('antd/lib/select/style/css');
require('antd/lib/button/style/css');
require('../loginMods.less');
import React from 'react';
import { Select,Button } from 'antd';
let companyInfo={
        CompanyId:''
    }
class CompanySelect extends React.Component{
    
    HandleClick=(e)=>{
        debugger;
        this.props.SelectCompany(companyInfo.CompanyId);
        e.stopPropagation();
    }
    selectCompany=(val)=>{
        companyInfo.CompanyId=val;
    }
    render(){
        const {options}=this.props;
        var companyList=[];
        const {Option}=Select;
        companyList.push(<Option value=""key="1" >请选择公司</Option>);
        options.forEach(function(item) {
            companyList.push(<Option value={item.CompanyId} key={item.CompanyId} >{item.CompanyName}</Option>);
        });
        return(
            <div className="login-info">
                <ul>
                    <li className="login-input-item">
                        <Select className="type-select" defaultValue="" onChange={this.selectCompany} children= {companyList} ></Select>
                    </li>
                    <li className="login-input-item">
                        <Button className="type-button" type="primary" onClick={this.HandleClick}>Login</Button>
                    </li>
                </ul>
            </div>
        )
    }

}
export default CompanySelect;
import React from 'react';

class SelectCompany extends React.Component{
    render(){
        const { companyName,userName,children}=this.props;
        return(
            <div className="select-company">
                <span className="company-name">欢迎，{companyName}</span>，<span>{userName}</span>
                <div className="company-box">
                    {children}
                </div>
            </div>
        )
    }
}
export default SelectCompany;
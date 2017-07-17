require('./IndexHeader.less');
import React from 'react';
import ActionButton from './ActionBtn';
import SelectCompany from './SelectCompany';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions/indexheader';

class IndexHead extends React.Component{
    //切换公司
    SelectCompany=(id)=>{
        console.log(id);
    }
    render(){
        var companyItems=[];
        var companyName='';
        const {CompanyList,NowCompanyId,Username}=this.props.indexHeader;
        if(CompanyList){
            var companys=typeof(CompanyList)==='string'?JSON.parse(CompanyList):CompanyList;
            companys.forEach(function(item,index) {
                if(item.CompanyId===NowCompanyId) {
                    companyName=item.CompanyName;
                    companyItems.push(<div className="company-item isActive" onClick={this.SelectCompany(item.CompanyId)} data-id={item.CompanyId} key={index} ><i className="tmfont tm-icon-visibility"></i>{item.CompanyName}</div>);
                }else{
                    companyItems.push(<div className="company-item" onClick={this.SelectCompany(item.CompanyId)} data-id={item.CompanyId} key={index} >{item.CompanyName}</div>);
                }
            }.bind(this));
        }
        return(
            <div className="index-head">
                <div className="index-head-left">
                    <div className="system-logo">
                        <img src={require('../../../images/etmfLogo.png')} />
                    </div>
                    <div className="system-name">
                        <p>eTMF</p>
                        <p>electronic Trial Master File System</p>
                    </div>
                </div>
                <div className="index-head-right" >
                    <ActionButton children={[
                        <SelectCompany companyName={companyName} userName={Username} children={companyItems} />,
                        <i className="tmfont tm-icon-lock"></i>,
                        <i className="tmfont tm-icon-edit4"></i>,
                        <i className="tmfont tm-icon-update"></i>,
                        <i className="tmfont tm-icon-export"></i>,
                        <i className="tmfont tm-icon-dropout"></i>
                    ]} />
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    const { indexHeader }= state;
    debugger;
    return{
        indexHeader
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(actions,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(IndexHead);
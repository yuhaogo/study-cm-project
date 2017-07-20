require('./IndexHeader.less');
import React from 'react';
import ActionButton from './ActionBtn';
import SelectCompany from './SelectCompany';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from 'actions/indexActionHeader';
import IndexNavs from './IndexNavs';
import Path from 'components/model/Path';

class IndexHead extends React.Component{
    //导航切换
    changeActive=(activeCode,e)=>{
        var e=e||event;
        const {actions}=this.props;
        actions.changeNavs(activeCode);
        e.stopPropagation();
        e.preventDefault();
    }
    //切换公司
    SelectCompany=(id)=>{
        console.log(id);
    }
    //获取导航栏
    getNavs=()=>{
        const {navs} = this.props;
        const navStats={
            panels:navs,
            onNavClick:this.changeActive
        }
        return (<IndexNavs {...navStats}/>)
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
                <div className="index-head-info">
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
                {this.getNavs()}
                <Path paths={[{Name:'我的文档'},{Name:'Yh'}]} />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    const { indexHeader }= state;
    return{
        indexHeader
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(IndexHead);
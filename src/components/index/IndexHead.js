require('./IndexMods.less');
import React from 'react';
import ActionButton from './actionBtn';
import SelectCompany from './selectcompany';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions/indexheader';

class IndexHead extends React.Component{

    componentDidMount=()=>{
          var {actions}= this.props;
          actions.initHeader('');
    }
    render(){
        var companyItems=[];
        const {companyList}=this.props;
        companyList.forEach(function(item,index) {
            companyItems.push(<div data-id={item.Id} key={index} >{item.Name}</div>);
        });

        return(
            <div className="index-head">
                <div className="index-head-left">
                    <div className="system-logo">
                        <img src={require('../../images/etmfLogo.png')} />
                    </div>
                    <div className="system-name">
                        <p>eTMF</p>
                        <p>electronic Trial Master File System</p>
                    </div>
                </div>
                <div className="index-head-right" >
                    <ActionButton children={[
                        <SelectCompany companyName="嘉兴太美医疗" userName="喻浩" children={companyItems} />,
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
    const { loginTypes,indexHeader }= state;
    return{
        indexHeader,
        companyList:loginTypes.companyList
    }
}
const mapDicpatchToProps=(dicpatch)=>{
    return{
        actions:bindActionCreators(actions,dicpatch)
    }
}


export default connect(mapStateToProps,mapDicpatchToProps)(IndexHead);
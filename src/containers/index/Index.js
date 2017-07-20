require('./Index.less');
import React from 'react';
import IndexHeader from '../../components/index/header/IndexHeader';
import IndexBody from '../../components/index/body/IndexBody';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from 'actions/indexActionBody';
 

//index页
class Index extends React.Component{
    
    componentDidMount=()=>{
        var {actions}=this.props;
        actions.getPower('/system/SystemMenuActionGet');
    }
    render(){
        var {MenuItems,Navs}=this.props.indexBody;
        let navs=[];
        for (var i = 0; i < MenuItems.length; i++) {
            var menu = MenuItems[i];
            const isActive=menu.Code===Navs.ActiveCode?true:false;
            navs.push(<div key={`nav_${i}`} active={isActive} navName={menu.Name} code={menu.Code} ></div>)
        }
        return(
            <div className="indexMain">
               <IndexHeader  navs={navs} />
               <IndexBody content={Navs.content} activeCode={Navs.ActiveCode} />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    const {indexBody}=state;
    return{
        indexBody
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
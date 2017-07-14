import React from 'react';
import IndexHeader from '../../components/index/header/IndexHeader';
import IndexNavs from '../../components/index/nav/Navs';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from 'actions/indexNavs';
 

//index页
class Index extends React.Component{
    
    componentDidMount=()=>{
        var {actions}=this.props;
        actions.getPower('/api/System/SystemMenuActionGet');
    }
    render(){
        return(
            <div className="indexMain">
               <IndexHeader />
               <IndexNavs />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Index);
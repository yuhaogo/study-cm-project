import React from 'react';
// import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// import actions from 'actions/user';
import IndexHead from '../../components/index/IndexHead';
 

//index页
class Index extends React.Component{
    
    render(){
        return(
            <div className="indexMain">
               <IndexHead />
            </div>
        )
    }
    
}
// function mapStateToProps(state){
//     const { loginTypes }=state;
//     return {
//         loginTypes
//     }
// }
// function mapDicpatchToProps(dicpatch){
//     return {
//         actions:bindActionCreators(actions,dicpatch)
//     }
// }
export default Index;
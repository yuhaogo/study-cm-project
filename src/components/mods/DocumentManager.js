require('./DocumentManager.less')
import React from 'react';
import LeftMenu from './DocumentManager/LeftMenu';
import actions from 'actions/indexActionBody';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DocumentManager extends React.Component{

    componentDidMount=()=>{
        const { actions } =this.props;
        actions.getFolderItems('document/FolderGet');
    }
    render(){
        const {FolderItems}=this.props.indexBody;
        return(
            <div className="document-manager">
                <div className="document-main">
                    <div className="document-menu">
                        <LeftMenu folders={FolderItems} />
                    </div>
                    <div className="document-table">

                    </div>
                </div>
            </div>
        )
    }
}
const stateToProps=(state)=>{
    const { indexBody }=state;
    return{
        indexBody
    }
}
const dispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(stateToProps,dispatchToProps)(DocumentManager);
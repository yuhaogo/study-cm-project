require('./DocumentManager.less')
import React from 'react';
import LeftMenu from './DocumentManager/LeftMenu';

class DocumentManager extends React.Component{
    render(){
        return(
            <div className="document-manager">
                <div className="document-main">
                    <div className="document-menu">
                        <LeftMenu />
                    </div>
                    <div className="document-table">

                    </div>
                </div>
            </div>
        )
    }

}
export default DocumentManager;
require('./IndexMods.less');
import React from 'react';

class IndexHead extends React.Component{

    render(){
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
                <div className="index-head-right" ></div>
            </div>
        )
    }
}

export default IndexHead;
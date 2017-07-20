import React from 'react';
//import IndexContent from './IndexContent';
import {connect} from 'react-redux';
import HomePage from 'components/mods/HomePage';
import DocumentManager from 'components/mods/DocumentManager';
require('./IndexBody.less');


class IndexBody extends React.Component{
    getNowContent=()=>{
        const {activeCode} = this.props;
        switch(activeCode){
            case 100:
                return(
                    <HomePage />
                )
            case 200:
                return(
                    <DocumentManager />
                )
        }
    }
    // //获取模块内容
    // getContent=()=>{
        
    //     return <IndexContent content={content} />
    // }
    render(){
        return(
            <div className="index-body">
                <div className="index-content" >
                    {this.getNowContent()}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    const { indexBody }= state;
    return{
        indexBody
    }
}
export default connect(mapStateToProps)(IndexBody);
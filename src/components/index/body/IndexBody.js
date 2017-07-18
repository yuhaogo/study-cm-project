import React from 'react';
import IndexNavs from './IndexNavs';
//import IndexContent from './IndexContent';
import {connect} from 'react-redux';
import actions from 'actions/indexActionBody';
import HomePage from 'components/mods/HomePage'
import FileManager from 'components/mods/FileManager'
require('./IndexBody.less');


class IndexBody extends React.Component{

    //导航切换
    changeActive=(activeCode,e)=>{
        var e=e||event;
        const {dispatch}=this.props;
        actions.changeNavs(activeCode,dispatch);
        e.stopPropagation();
        e.preventDefault();
    }
    //获取导航栏
    getNavs=()=>{
        const {navs} = this.props;
        const navStats={
            panels:navs,
            onNavClick:this.changeActive
        }
        debugger;
        return (<IndexNavs {...navStats}/>)
    }
    getNowContent=()=>{
        const {activeCode} = this.props;
        switch(activeCode){
            case 100:
                return(
                    <HomePage />
                )
            case 200:
                return(
                    <FileManager />
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
                <div className="index-navs">
                    {this.getNavs()}
                </div>
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
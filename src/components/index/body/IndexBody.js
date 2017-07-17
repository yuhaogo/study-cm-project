import React from 'react';
import IndexNavs from './IndexNavs';
import IndexContent from './IndexContent';
class IndexBody extends React.Component{

    getNavs=()=>{
        const {MenuItems} = this.props;
        const navs=[];
        MenuItems.forEach(function(item){
            const nav={
                title:item.Name
            }

        })
        return <IndexNavs navs={navs} />
    }
    getContent=()=>{
        const { content }=this.props.children[activeIndex];
        return <IndexContent content={content} />
    }
    render(){
        return(
            <div>
            </div>
        )
    }
}

export default IndexBody;
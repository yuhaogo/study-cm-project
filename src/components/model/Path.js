import React from 'react';
require('./Path.less');
//展示路径
const Path =(props)=>{
    let pathList=[];
    const {paths}=props;
    paths.forEach(function(item,i){
        if(!item)return;
        const isLast=i==paths.length-1?true:false;
        let classes=isLast?' path-item-last':'path-item';
    
        pathList.push(
        <li key={i} className={classes} >
            <span>{item.Name}</span>
            {isLast?'':<i className="tmfont tm-icon-arrow-right"></i>}
        </li>
        );
    })
    return(
        <ul className="paths">
            <li className="title">您当前的位置:</li>
            {pathList}
        </ul>
    )

}
Path.propTypes={
    paths:React.PropTypes.array
}

export default Path;
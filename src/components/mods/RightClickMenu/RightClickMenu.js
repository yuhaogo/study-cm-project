require('./RightClickMenu.less');
import React from 'react';

const RightClickMenu = (props)=>{
    const {isShow,position}=props;
    return(
        <div className="right-click-menu" style={{top:position.top,left:position.left,opacity:isShow?1:0}}>
            <ul>
                <li className="rc-item">提交审批</li>
                <li className="rc-item">属性</li>
                <li className="rc-item">删除</li>
            </ul>
        </div>
    )
}
export default RightClickMenu;
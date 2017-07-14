import React from 'react';
//头部右侧按钮集合
class ActionButton extends React.Component{
    render(){
        let btnList=[];
        const btns=this.props.children;
        btns.forEach(function(item,index){
            if(!item) return false;
            btnList.push(<li className='button-item' key={index} >{item}</li>);
        })
        return(
            <div className="action-buttons">
                <ul>
                    {btnList}
                </ul>
            </div>
        )
    }

}
export default ActionButton;
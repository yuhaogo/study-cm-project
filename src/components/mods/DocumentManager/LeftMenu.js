require('antd/lib/Menu/style/css');
require('antd/lib/Icon/style/css');
require('antd/lib/Tree/style/css');
import React from 'react';
import { Menu, Icon,Tree} from 'antd';
const TreeNode=Tree.TreeNode;
const LeftMenu =(props)=>{
    const {folders}=props;
    if(!folders) return (<div></div>);
    const onLoadData=()=>{
        
        debugger;
        return new Promise(resolve=>{
            resolve();
        });
    }
    const loop= data=> data.map(Item =>{
        if(Item.IsParent){
            return(<TreeNode title={Item.FolderName} key={Item.Id}>{loop(Item.Children)}</TreeNode>)
        }
        return(<TreeNode title={Item.FolderName} key={Item.Id} isLeaf={!Item.IsParent} />)
    })
    const trees=loop(props.folders);
    return(
        <div className="menu-list">
            <Menu defaultSelectedKeys={['DocumentManager']} >
                <Menu.Item>
                    <span><Icon type="schedule" />文档计划</span>
                </Menu.Item>
                <Menu.Item key="DocumentManager">
                    <span><Icon type="bars" />我的文档</span>
                </Menu.Item>
            </Menu>
            <Tree loadData={onLoadData} >
                {trees}
            </Tree>
        </div>
    )
}

export default LeftMenu;
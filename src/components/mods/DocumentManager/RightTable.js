import React from 'react';
import {Button,Input,Select,Table} from 'antd';
import RightClickMenu from '../RightClickMenu/RightClickMenu';
const InputGroup=Input.Group;
const Option=Select.Option;

class RightTable extends React.Component{
    constructor(){
        super();
        this.state={
            isShow:false,
            pos:{
                top:0,
                left:0
            }
        }
    }
    getBtns=()=>{
        var btns=[];
        let {Buttons} =this.props;
        for (var i = 0; i < Buttons.length; i++) {
            var item = Buttons[i];
             switch(item.Type){
                case 'NewFolder':
                    btns.push(<Button type="primary" key={i}>新建文件夹</Button>)
                    break;
                case 'ImportTemplate':
                    btns.push(<Button type="primary" key={i}>导入模板</Button>)
                    break;
                case 'SimpleUpload':
                    btns.push(<Button type="primary" key={i}>单个上传</Button>)
                    break;
                case 'BatchUpload':
                    btns.push(<Button type="primary" key={i}>批量上传</Button>)
                    break;
                case 'BatchSubmit':
                    btns.push(<Button type="primary" key={i}>批量提交</Button>)
                    break;

            }
        }
        return btns;
    }
    //右击
    handleRightClick=(row,i,e)=>{
        e.preventDefault();
        this.setState({
            isShow:false
        })
        if(e.button==2){
            let top= e.pageY || e.clientY;
            let left= e.pageX || e.clientX;
            setTimeout(function(){
                this.setState({
                    isShow:true,
                    pos:{
                        top:top,
                        left:left
                    }
                })
            }.bind(this),125)
            
        }

    }
    render(){
        const btns=this.getBtns();
        const columns=[
            {
                title:'名称',
                dataIndex:'Name',
                key:'Name',
                width:200,
                onCellClick:this.handleClick
            },
            {
                title:'类型',
                dataIndex:'Type',
                key:'Type',
                width:80
                
            },
            {
                title:'审批状态',
                dataIndex:'ApprovalStatus',
                key:'ApprovalStatus',
                width:80
            },
            {
                title:'创建人',
                dataIndex:'CreatePerson',
                key:'CreatePerson',
                width:80
            },
            {
                title:'文件来源',
                dataIndex:'FileSource',
                key:'FileSource'
            },
            {
                title:'版本日期',
                dataIndex:'VersionDate',
                key:'VersionDate',
                width:200
            },
            {
                title:'创建时间',
                dataIndex:'CreateTime',
                key:'CreateTime',
                width:200
            },
            {
                title:'修改时间',
                dataIndex:'ModifiTime',
                key:'ModifiTime',
                width:200
            }
        ]
        const dataSource=[
            {
                key:'1',
                Name:'test',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50',
                rowkey:'1'
            },
            {
                key:'2',
                Name:'YH',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
                key:'3',
                Name:'yhtest',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'4',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'5',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'6',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'7',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'8',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'9',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'10',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'11',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'12',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'13',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'14',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'15',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'16',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'17',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            },
            {
               key:'18',
                Name:'yhpro',
                Type:'文件夹',
                ApprovalStatus:'',
                CreatePerson:'yh',
                FileSource:'',
                VersionDate:'',
                CreateTime:'2017-07-19 17:53:50',
                ModifiTime:'2017-07-19 19:53:50'
            }
        ]
        const {isShow,pos}=this.state;
        return(
            <div className="right-table">
                <div className="right-title">
                    <div className="document-btns" >
                        {btns}
                    </div>
                    <div className="document-search" >
                        <InputGroup compact >
                            <Select defaultValue="0" style={{width:80}}>
                                <Option value="0">全部</Option>
                                <Option value="1">文件</Option>
                                <Option value="2">文件夹</Option>
                            </Select>
                            <Input style={{width:200}} />
                        </InputGroup>
                    </div>
                </div>
                <div className="right-main">
                    <RightClickMenu isShow={isShow} position={pos} />
                    <Table columns={columns} dataSource={dataSource} onRowClick={this.handleRightClick} onChange={this.handleChange} pagination={false} scroll={{y:window.innerHeight-270}} />
                </div>
            </div>
        )
    }
}
export default RightTable;
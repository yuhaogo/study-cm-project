import React from 'react';
import {Modal,Form,Input,Select} from 'antd';
const FormItem=Form.Item;
const NewFolder=(props)=>{
    var {getFieldDecorator}=props.form;
    return(
        <Modal>
            <Form>
                <FormItem label='文件夹名称:'>
                    { getFieldDecorator('',{
                        rules:[{
                            required:true,
                            message:"请输入文件夹名称!",
                            whitespace:true
                        }]
                    })(<Input />)}
                </FormItem>
            </Form>
        </Modal>
    )
}
const WrappedNewFolder=Form.create()(NewFolder);
export default WrappedNewFolder
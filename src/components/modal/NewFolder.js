import React from 'react';
import {Modal,Form,Input,Select} from 'antd';
const FormItem=Form.Item;
const NewFolder=(props)=>{
    let {visible}=props;
    let {getFieldDecorator}=props.form;
    return(
        <Modal title="新建文件夹" visible={visible}>
            <Form>
                <FormItem label="文件夹名称:">
                    { getFieldDecorator('string',{
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
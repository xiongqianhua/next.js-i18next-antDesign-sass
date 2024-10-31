import React, { useState,useEffect } from 'react';
import { Form, Input, Modal, Radio } from 'antd';
const App = (props) => {
    const [form] = Form.useForm();
    const [formValues, setFormValues] = useState();
    const [open, setOpen] = useState(props.open);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        props.submitForm(values)
        setFormValues(values);
        setOpen(false);
    };
    useEffect(()=>{
        console.log(props)
        setOpen(props.open)
        if(props.type === 'edit' && props.defaultValues){
            setFormValues(props.defaultValues)
        }
    })
    return (
        <>  
            <Modal
                open={open}
                title={props.type === 'add' ? '新增环境' : '编辑环境'}
                okText="确认"
                cancelText="取消"
                okButtonProps={{
                    autoFocus: true,
                    htmlType: 'submit',
                }}
                onCancel={props.cancel}
                destroyOnClose
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                            ...formValues
                        }}
                        clearOnDestroy
                        onFinish={(values) => onCreate(values)}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item
                    name="name"
                    label="环境名称"
                    rules={[
                        {
                            required: true,
                            message: '请输入环境名称!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Title"
                    label="语言"
                    rules={[
                        {
                            required: true,
                            message: '请输入环境语言!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="Description" label="环境描述">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="Status" label="环境状态" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="public">生效</Radio>
                        <Radio value="private">不生效</Radio>
                    </Radio.Group>
                </Form.Item>
            </Modal>
        </>
    );
};
export default App;
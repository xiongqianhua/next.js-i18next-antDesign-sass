import React, { useState,useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
const App = (props) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
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
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        版本管理
      </Button>
      <Drawer
        title={props.type === 'edit' ? '版本编辑': '版本添加'}
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button onClick={onClose} type="primary">
              提交
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" form={form}
                        name="form_in_modal"
                        initialValues={{
                            modifier: 'public',
                            ...formValues
                        }}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="版本名称"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
           <Col span={12}>
                <Form.Item
                    name="type"
                    label="版本状态"
                    rules={[
                    {
                        required: true,
                        message: 'Please choose the type',
                    },
                    ]}
                >
                    <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="是否为基线"
                rules={[
                  {
                    required: true,
                    message: 'Please select an owner',
                  },
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="0">是</Option>
                  <Option value="1">否</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="版本描述"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};
export default App;
/*
 * @Author: qianhua.xiong
 */
import React, { useState } from 'react';
import { Avatar, Modal, Form, List,Input, Select,Button} from 'antd';
const App = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
      setIsModalOpen(true);
   };
   const handleOk = () => {
      setIsModalOpen(false);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <List
        dataSource={[
          {
            id: 1,
            name: 'Admin',
            role:'管理员'
          },
          {
            id: 2,
            name: 'user1',
            role:'用户1'
          },
          {
            id: 3,
            name: 'user2',
            role:'用户2'
          },
          {
            id: 4,
            name: 'user3',
            role:'用户3'
          },
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a onClick={showModal} key={`a-${item.id}`}>
                编辑
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              }
              title={<a href="">{item.name}</a>}
              description={item.role}
            />
          </List.Item>
        )}
      />
      <Modal title="账户编辑" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
              <Form.Item
                name="owner"
                label="账户名"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Input/>
              </Form.Item>
              <Form.Item
                name="owner"
                label="密码"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="owner"
                label="用户角色"
                rules={[{ required: true, message: 'Please select an owner' }]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">管理员</Option>
                  <Option value="mao">用户</Option>
                </Select>
              </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default App;
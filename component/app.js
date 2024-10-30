import React, { useState } from 'react';
import { Button, Form, Input, Space, Table, Tag,Card,Divider } from 'antd';
const APP = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const columns = [
    {
      title: 'app环境',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '环境描述',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '环境状态',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === '异常') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>详情 </a>
          <a>编辑</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'test',
      age: '2024.10.31',
      address: '这个是干嘛的！！！！',
      tags: ['异常'],
    },
    {
      key: '2',
      name: 'env',
      age: '2024.10.31',
      address: '这个是干嘛的！！！！',
      tags: ['异常'],
    },
    {
      key: '3',
      name: 'prod',
      age: '2024.10.31',
      address: '这个是干嘛的！！！！',
      tags: ['正常', '使用中'],
    },
  ];
  return (<Card>
    <Form
      layout={'inline'}
      form={form}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item label="APP环境">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">查询</Button>
      </Form.Item>
    </Form>
        <Divider
        variant="dashed"
        style={{
        borderColor: '#7cb305',
        }}
        dashed
    >
        APP配置列表
    </Divider>
    <Table columns={columns} dataSource={data} />
  </Card>
    
  );
};
export default APP;
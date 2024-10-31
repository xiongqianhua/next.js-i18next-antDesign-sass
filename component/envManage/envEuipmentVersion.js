import React, { useState } from 'react';
import { Button, Form, Input, Space, Table, Tag,Card,Divider } from 'antd';
import AddEnvForm from '../envManage/addEnvForm';
const envEuipment = (props) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [visible, setVisible] = useState(false);
  const [record, setrecord] = useState(null);
  const [type, setType] = useState('add');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const addEnvForm = ()=>{
    console.log('add')
    setVisible(true)
    setType('add')
    setrecord(null)
  }
  const cancelForm = ()=>{
    setVisible(false)
  }
  const editEnvForm = (v)=>{
    setVisible(true)
    setType('edit')
    setrecord(v)
  }
  const envDetails = ()=>{
    console.log('详情！')
  }
  const submitForm = (values)=>{
    console.log(values,'提交表单')
  }
  const columns = [
    {
      title: '版本名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '环境名称',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '是否基线',
      dataIndex: 'Description',
      key: 'Description',
    },
    {
      title: '版本状态',
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
      title: '更新时间',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <a onClick={()=> envDetails(record)}>详情 </a> */}
          <a type='edit' onClick={()=> editEnvForm(record)}>编辑</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'test',
      age: '2024.10.31',
      Description: '这个是干嘛的！！！！',
      tags: ['异常'],
    },
    {
      key: '2',
      name: 'env',
      age: '2024.10.31',
      Description: '这个是干嘛的！！！！',
      tags: ['异常'],
    },
    {
      key: '3',
      name: 'prod',
      age: '2024.10.31',
      Description: '这个是干嘛的！！！！',
      tags: ['正常', '使用中'],
    },
  ]
  console.log(props,'props')
  return (<Card>
    <Form
      layout={'inline'}
      form={form}
      onValuesChange={onFormLayoutChange}
    >
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
        <Divider
        variant="dashed"
        style={{
        borderColor: '#7cb305',
        }}
        dashed
    >
        设备环境版本列表
    </Divider>
    <Button type="primary" onClick={addEnvForm}>新增版本</Button>
    <AddEnvForm type={type} open={visible} cancel={cancelForm} submit={submitForm} defaultValues={record}/>
    <Table columns={columns} dataSource={data} />
  </Card>
    
  );
};
export default envEuipment;

export async function getServerSideProps() {
  const res = await fetch(`/data`, {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
  const data = [
    {
      key: '1',
      name: 'test',
      age: '2024.10.31',
      Description: '这个是干嘛的！！！！',
      tags: ['异常'],
    },
    {
      key: '2',
      name: 'env',
      age: '2024.10.31',
      Description: '这个是干嘛的！！！！',
      tags: ['异常'],
    },
    {
      key: '3',
      name: 'prod',
      age: '2024.10.31',
      Description: '这个是干嘛的！！！！',
      tags: ['正常', '使用中'],
    },
  ] || await res.json()
  return { props: { data } }
}
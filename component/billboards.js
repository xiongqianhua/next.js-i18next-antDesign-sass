import React from 'react';
import { Card, List,Statistic } from 'antd';
const data = [
  {
    title: '版本数',
  },
  {
    title: '域名数',
  },
  {
    title: '端口数',
  },
  {
    title: '环境数',
  },
  {
    title: '设备数',
  },
];
const App = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>
            <Statistic title="Active Number" value={112893} />
        </Card>
      </List.Item>
    )}
  />
);
export default App;
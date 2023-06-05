import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

export default function Index() {
  const layoutStyle: React.CSSProperties = {
    width: '100vw',
    minWidth: '1200px',
    height: '100vh',
    backgroundColor: '#f3f3f3',
    overflow: 'hidden'
  };

  const headerStyle: React.CSSProperties = {
    width: '100vw',
    minWidth: '1200px',
    height: 60,
    backgroundColor: '#fff',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const contentStyle: React.CSSProperties = {
    width: 'calc(100vw - 40px - 20px - 200px)',
    minWidth: 'min-width: calc(1200px - 40px - 20px - 200px)',
    height: 'calc(100vh - 60px - 40px)',
    position: 'absolute',
    top: 80,
    left: 240,
    backgroundColor: '#fff',
    borderRadius: 4
  };

  const siderStyle: React.CSSProperties = {
    paddingTop: 12,
    position: 'absolute',
    width: 200,
    height: 'calc(100vh - 60px - 40px)',
    left: 20,
    top: 80,
    borderRadius: 4,
    backgroundColor: '#ffffff'
  };
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle} />
      <Layout hasSider>
        <Sider style={siderStyle}>Sider</Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

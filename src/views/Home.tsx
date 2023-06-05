import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import logo from '@/Icons/svgs/logo.svg';

const { Header, Sider, Content } = Layout;
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

// 左侧导航栏
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4')
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6')
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export default function Index() {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div className="flex justify-start items-center">
          <img className="w-[45px] h-[30px]" src={logo} alt="" />
          <div className="text-[20px] ml-[12px] font-bold">一秒快送后台管理系统</div>
        </div>
        <div />
      </Header>
      <Layout hasSider>
        <Sider style={siderStyle}>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
            items={items}
          />
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

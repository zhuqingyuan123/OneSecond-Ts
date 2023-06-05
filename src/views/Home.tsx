import React from 'react';
import {
  IdcardFilled,
  DashboardFilled,
  CreditCardFilled,
  CarFilled,
  BankFilled,
  ContactsFilled,
  RedEnvelopeFilled,
  ReconciliationFilled,
  SettingFilled
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '@/Icons/svgs/logo.svg';
import styled from 'styled-components';

const ListSpan = styled.div`
  .ant-menu-submenu-title {
    .ant-menu-title-content {
      font-weight: bold;
    }
  }
  .ant-menu-item {
    > .ant-menu-title-content {
      font-weight: bold;
    }
  }
`;

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
  borderRadius: 4,
  padding: 20
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

const items: MenuProps['items'] = [
  getItem('数据总览', '/', <DashboardFilled />),

  getItem('用户管理', 'user', <IdcardFilled />, [
    getItem('代理列表', 'agents'),
    getItem('管理员列表', 'admins'),
    getItem('用户列表', 'users')
  ]),

  // { type: 'divider' },

  getItem('订单管理', 'order', <CreditCardFilled />, [
    getItem('订单列表', 'orders'),
    getItem('资金走向列表', 'capitaltrend'),
    getItem('取消订单配置', 'cancelset'),
    getItem('小费选项配置', 'feeset')
  ]),
  getItem('骑手管理', 'rider', <CarFilled />, [
    getItem('骑手列表', 'riders'),
    getItem('骑手审核列表', 'registers')
  ]),
  getItem('城市管理', 'city', <BankFilled />, [getItem('城市运营列表', 'citys')]),
  getItem('运营管理', 'valuation', <ContactsFilled />, [
    getItem('计价规则', 'valuations'),
    getItem('重量标签', 'weight'),
    getItem('物品标签组', 'tag')
  ]),
  getItem('优惠券管理', 'coupon', <RedEnvelopeFilled />, [
    getItem('优惠券管理', 'coupons'),
    getItem('优惠券设置', 'couponSettings')
  ]),
  getItem('提现管理', 'withdrawal', <ReconciliationFilled />, [
    getItem('提现列表', 'cash'),
    getItem('提现设置', 'withdrawalSettings')
  ]),
  getItem('系统设置', 'config', <SettingFilled />, [
    getItem('小程序设置', 'smallapp'),
    getItem('分享设置', 'share'),
    getItem('积分设置', 'integral'),
    getItem('订阅消息设置', 'wxsubscribe'),
    getItem('用户指南', 'userGuide'),
    getItem('骑手指南', 'riderGuide'),
    getItem('骑手协议', 'agreementRider')
  ])
];
export default function Index() {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    if (e.keyPath.length > 1) {
      // console.log('keyPath ', e);
      navigate(
        e.keyPath
          .reverse()
          .map((item) => `/${item}`)
          .join('')
      );
    } else {
      navigate(e.keyPath.join(''));
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
          <ListSpan>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </ListSpan>
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

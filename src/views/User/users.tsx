import React, { useState, useEffect } from 'react';
import { Select, Input, Button, Divider, Table, Tag, Dropdown, Tooltip } from 'antd';
import { RedoOutlined, QqOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
// import { useRequest } from 'ahooks';
import { getUserListData } from '@/service/userApi';

const Wrap = styled.div`
  .ant-select {
    .ant-select-selector {
      height: 40px !important;
      background-color: blue;
      .ant-select-selection-placeholder,
      .ant-select-selection-item {
        line-height: 38px;
      }
    }
  }

  .ant-table-thead > tr > th {
    font-weight: 500 !important;
  }

  .ant-table-tbody tr td {
    .ant-btn {
      /* background-color: red !important; */
      padding: 0 7px;
      height: 24px;
      font-weight: 700;
    }
  }

  .ant-tag {
    border-radius: 4px !important;
  }
`;

export default function Admins() {
  /** '代理编号', '账号', '手机号', '昵称' */
  const inpArr = ['用户编号', '昵称', '手机号'];
  const title: string = '用户列表';

  const [adminData, setAdminData] = useState<
    Awaited<ReturnType<typeof getUserListData>>['data']['data']
  >([]);

  useEffect(() => {
    getUserListData()
      .then((res) => {
        console.log('请求成功', res.data.data);
        setAdminData(res.data.data);
      })
      .catch(() => {});
  }, []);

  // 表格数据类型
  interface DataType {
    adminNo?: string;
    adminName?: string;
    mobileNumber?: string;
    realName?: string;
    status?: number;
    createTime?: string;
    updateTime?: string;
    defaultPwd?: string;
    updatedBy?: string;
  }
  // 操作下拉菜单
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <span>修改</span>
    },
    {
      key: '2',
      label: <span>启用</span>,
      disabled: true
    },
    {
      key: '3',
      label: <span>禁用</span>
    },
    {
      key: '4',
      label: <span>重置</span>
    }
  ];
  // 表格行
  const columns: ColumnsType<DataType> = [
    {
      title: '编号',
      dataIndex: 'adminNo',
      render: (text: string) => <p>{text}</p>
    },
    {
      title: '账号',
      dataIndex: 'adminName'
    },
    {
      title: '手机号',
      dataIndex: 'mobileNumber'
    },
    {
      title: '姓名',
      dataIndex: 'realName'
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (text) => (
        <Tag color={text === 1 ? 'green' : 'red'}>{text === 1 ? '启用' : '禁用'}</Tag>
      )
    },
    {
      title: '时间',
      dataIndex: 'createTime',
      render: (text) => (
        <div className="text-[12px]">
          <p>创建:{text.slice(0, 16).replace(/-/g, '/').replace(/T/g, ' ')}</p>
          <p>更新:{text.slice(0, 16).replace(/-/g, '/').replace(/T/g, ' ')}</p>
        </div>
      )
    },
    {
      title: '操作',
      dataIndex: 'updatedBy',
      render: () => (
        <div className="flex">
          <Tooltip placement="top" title="操作人">
            <QqOutlined className="text-[18px] text-[#955ce6]" />
          </Tooltip>
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button type="primary" ghost>
              · · ·
            </Button>
          </Dropdown>
        </div>
      )
    }
  ];
  // 表格数据
  const data = adminData;

  return (
    <Wrap>
      <div>
        <h2 className="text-[24px] font-medium">{title}</h2>
      </div>
      <div>
        <div className="flex flex-wrap mt-[20px]">
          {inpArr.map((item) => (
            <div className="w-[200px] h-[40px] mr-[8px] mb-[8px]" key={item}>
              <Input placeholder={item} className="h-full" />
            </div>
          ))}
          <div className="w-[200px] h-[40px] mr-[8px] mb-[8px]">
            <Select
              placeholder="状态"
              style={{ width: 200 }}
              options={[
                { value: '状态：全部', label: '状态：全部' },
                { value: '状态：启用', label: '状态：启用' },
                { value: '状态：禁用', label: '状态：禁用' }
              ]}
              className="h-full w-full leading-[40px]"
            />
          </div>
        </div>
        <div className="mt-3">
          <Button size="large" className="w-[120px] mr-1">
            取消
          </Button>
          <Button type="primary" size="large" className="w-[120px]">
            搜索
          </Button>
        </div>
        <Divider />
      </div>
      <div className="flex justify-between">
        <Button
          size="large"
          icon={<RedoOutlined />}
          className=" justify-end"
          href="https://www.google.com"
        />
      </div>
      {/* 表格 */}
      <Table
        rowSelection={{
          type: 'checkbox'
        }}
        bordered
        // pagination={paginationProps { total: 100, pageSize: 20, showQuickJumper: true }}
        columns={columns}
        dataSource={data}
        className="mt-5"
      />
    </Wrap>
  );
}

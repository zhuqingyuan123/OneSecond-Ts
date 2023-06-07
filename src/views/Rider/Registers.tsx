/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { Input, Space, Select, Button, Table } from 'antd';
import styled from 'styled-components';
import { ReloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '用户编号',
    dataIndex: 'name'
  },
  {
    title: '姓名',
    dataIndex: 'address'
  },
  {
    title: '身份证号码',
    dataIndex: 'address'
  },
  {
    title: '身份证头像照片',
    dataIndex: 'address'
  },
  {
    title: '身份证国徽照片',
    dataIndex: 'address'
  },
  {
    title: '状态',
    dataIndex: 'address'
  },
  {
    title: '时间',
    dataIndex: 'address'
  },
  {
    title: '操作',
    dataIndex: 'address'
  }
];

const data: DataType[] = [];
for (let i = 0; i < 4; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

const Wraper = styled.div`
  .inputs {
    width: 180px;
    height: 40px;
    margin-right: 15px;
    margin-top: 5px;
  }
  .css-dev-only-do-not-override-17rhbxn.ant-checkbox .ant-checkbox-inner {
    border-radius: 0px;
  }
  .css-dev-only-do-not-override-17rhbxn.ant-table-wrapper .ant-table-thead > tr > th {
    padding: 9px 14px;
    border-bottom: 1px solid #ccc;
    background: none;
    font-weight: normal;
  }
  .css-dev-only-do-not-override-17rhbxn.ant-table-wrapper table {
    border: 1px solid #ccc;
    border-radius: 0px;
  }
  .css-dev-only-do-not-override-17rhbxn.ant-table-wrapper
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not(
      [colspan]
    )::before {
    height: 2.6em;
    background-color: #ccc;
  }
  .css-dev-only-do-not-override-17rhbxn.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector {
    height: 40px;
  }

  .css-dev-only-do-not-override-17rhbxn.ant-btn {
    height: 40px;
  }
`;

function Registers() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  const navigate = useNavigate();
  return (
    <Wraper>
      <div>
        <h1 className=" text-2xl">骑手列表</h1>
        <div className="border-b border-neutral-300 border-solid">
          <div>
            <Input placeholder="用户编号" className="inputs" />
            <Input placeholder="真实姓名" className="inputs" />
            <Input placeholder="身份证号码" className="inputs" />
            <Space wrap className="inputs">
              <Select
                placeholder="状态"
                className="inputs"
                options={[
                  { value: '状态: 全部', label: '状态: 全部' },
                  { value: '状态: 待审核', label: '状态: 待审核' },
                  { value: '状态: 已通过', label: '状态: 已通过' },
                  { value: '状态: 未通过', label: '状态: 未通过' }
                ]}
              />
            </Space>
          </div>
          <div className=" mt-6 mb-10">
            <Button className=" w-28 h-16 mr-2">取消</Button>
            <Button type="primary" className="w-28 h-16">
              搜索
            </Button>
          </div>
        </div>
        <div>
          <div className=" flex justify-between mt-8">
            <Button
              type="primary"
              className=" w-38 h-20 "
              onClick={() => navigate('/rider/edit/add')}
            >
              新增一位骑手
            </Button>
            <Button className=" w-20" icon={<ReloadOutlined />} />
          </div>
          <div className=" mt-3">
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </Wraper>
  );
}

export default Registers;

import { AxiosPromise } from 'axios';
import request from './request';

// 代理列表数据
interface IAgentListParams {
  current?: 1,
  pageSize?: 20
}
type IAgentListData = {
  code: number;
  msg: string;
  data: {
    pageSize: number;
    current: number;
    count: number;
    totalPages: number;
    data: {
      agentNo: string;
      agentAccount: string;
      mobileNumber: string;
      realName: string;
      status: number;
      createTime: string;
      updateTime: string;
      defaultPwd: string;
      updatedBy: string;
    }[];
  };
};
export const getAgentData = async (data: IAgentListParams = { current: 1, pageSize: 20 }) => {
  const res = request.get('/admin/agent/list', { params: data }) as AxiosPromise<IAgentListData>;
  return (await res).data;
};

// 管理员列表数据
type IAdminListData = {
  code: number;
  msg: string;
  data: {
    pageSize: number;
    current: number;
    count: number;
    totalPages: number;
    data: {
      adminNo: string;
      adminName: string;
      mobileNumber: string;
      realName: string;
      status: number;
      createTime: string;
      updateTime: string;
      defaultPwd: string;
      updatedBy: string;
    }[];
  };
};
export const getAdminData = async (data: IAgentListParams = { current: 1, pageSize: 20 }) => {
  const res = request.get('/admin/list', { params: data }) as AxiosPromise<IAdminListData>;
  console.log('管理员列表数据:', (await res).data);
  return (await res).data;
};

// 用户列表
export const getUserListData = async (data: IAgentListParams = { current: 1, pageSize: 20 }) => {
  const res = request.get('/admin/user/list', { params: data }) as AxiosPromise<IAdminListData>;
  console.log('用户列表数据:', (await res).data);
  return (await res).data;
};

export default {};

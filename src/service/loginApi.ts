import request from './request';

interface Iloginparams {
  adminName: string;
  adminPwd: string;
  no: string;
  verifyCode: string;
}

export const goLogin = async (params: Iloginparams) => {
  const res = await request.post('/admin/login', params);
  return res;
};
// 获取验证码

export const goVerifycode = async () => {
  const res = await request.get('/admin/verifycode');
  return res.data.data;
};

export default {};

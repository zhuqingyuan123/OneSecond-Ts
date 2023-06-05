import request from './request';

export const goLogin = async () => {
  const res = await request.get('');
  return res;
};

export default {};

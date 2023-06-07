/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { ArrowLeftOutlined, PictureOutlined } from '@ant-design/icons';
import { Form, Input, Space, Button, Upload, Modal, message, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import styled from 'styled-components';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Wraper = styled.div`
  .inputs {
    width: 520px;
    height: 40px;
  }
  .css-dev-only-do-not-override-17rhbxn.ant-btn {
    height: 40px;
  }
  .labs::before {
    display: inline-block;
    margin-inline-end: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }
  .css-dev-only-do-not-override-17rhbxn.ant-upload-wrapper.ant-upload-picture-card-wrapper
    .ant-upload.ant-upload-select {
    width: 272px;
    height: 138px;
  }
`;

function Add() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const uploadButton = (
    <div>
      <PictureOutlined className=" text-2xl text-slate-200" />
    </div>
  );

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Wraper>
      <div>
        <h1 className=" text-xl">
          <ArrowLeftOutlined className=" mr-2" />
          新手骑手
        </h1>
        <div className=" border-t border-white border-solid mt-3">
          <Form name="normal_login" initialValues={{ remember: true }}>
            <div className=" mt-4">
              <Form.Item name="username" rules={[{ required: true, message: '请输入手机号' }]}>
                <p className="labs mb-2">用户:</p>
                <Space.Compact className="inputs">
                  <Input placeholder="输入用户手机号查询" />
                  <Button>查询</Button>
                </Space.Compact>
              </Form.Item>
            </div>
            <Form.Item name="username" rules={[{ required: true, message: '请输入真实姓名' }]}>
              <p className="labs mb-2">真实姓名:</p>
              <Space.Compact className="inputs">
                <Input placeholder="请输入真实姓名" />
              </Space.Compact>
            </Form.Item>
            <Form.Item name="username" rules={[{ required: true, message: '请输入身份证号码' }]}>
              <p className="labs mb-2">身份证号码:</p>
              <Space.Compact className="inputs">
                <Input placeholder="请输入身份证号码" />
              </Space.Compact>
            </Form.Item>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请上传身份头像面照片' }]}
            >
              <p className="labs mb-2">上传身份头像面照片:</p>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={beforeUpload}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
              <div className=" text-xs text-gray-300">
                <p>上传格式:jpg,jpeg,png,webp</p>
                <p>最大限制2MB</p>
              </div>
            </Form.Item>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请上传身份国徽面照片' }]}
            >
              <p className="labs mb-2">上传身份国徽面照片: </p>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={beforeUpload}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
              </Modal>
              <div className=" text-xs text-gray-300">
                <p>上传格式:jpg,jpeg,png,webp</p>
                <p>最大限制2MB</p>
              </div>
            </Form.Item>
            <div>
              <p>状态：</p>
              <div className=" mt-4">
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>通过审核</Radio>
                  <Radio value={2}>待审核</Radio>
                </Radio.Group>
              </div>
            </div>
            <div className=" mt-4">
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  提交保存
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </Wraper>
  );
}

export default Add;

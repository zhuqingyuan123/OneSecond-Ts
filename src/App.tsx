import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import RouterConfig from './router/router';
import './App.css';

const theme = {
  token: {
    colorPrimary: '#955ce6',
    borderRadiusSM: 10,
    borderRadius: 4,
    fontSize: 14,
    wireframe: true
  }
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <StyleProvider hashPriority="high">
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </StyleProvider>
    </ConfigProvider>
  );
}
export default App;

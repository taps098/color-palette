import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function HeaderLayout(props){
  return(
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2"><a href="https://drive.google.com/file/d/1tM-m4lB3mrcWq_JzXTi0JvciSvrAejvr/view?usp=sharing" target='_blank'>Profile</a></Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderLayout;

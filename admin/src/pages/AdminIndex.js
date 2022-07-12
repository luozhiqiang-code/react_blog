import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, message } from "antd";
import { Route, Routes } from "react-router-dom";
import ArticleList from "./ArticleList";
import AddArticle from "./AddArticle";
import BBDList from "./BBDList";
import "../static/AdminIndex.css";
import Icon from "@ant-design/icons";
import axios from "axios";
import servicePath from "../config/apiUrl";
import { useNavigate } from "react-router";
import { Outlet } from "react-router";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = new useNavigate();

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleClickArticle = (e) => {
    // console.log(e.item.props);
    if (e.key == "addArticle") {
      // props.history.push('/index/add')
      navigate("add");
    } else {
      // props.history.push('/index/list')
      navigate("list");
    }
  };

  // 退出登录的方法
  const handleExit = (e) => {
    // localStorage.removeItem("openId");
    navigate("/");
    // axios({
    //   method: "get",
    //   url: servicePath.outLogin,
    //   header: { "Access-Control-Allow-Origin": "*" },
    //   withCredentials: true,
    // }).then((res) => {
    //   if (res.data.data == "退出成功") {
    //     message.success("已退出");
    //     setTimeout(() => {
    //       // props.history.push("/");
    //     }, 1000);
    //   }
    // });
  };

  // 跳转到大胖逼逼叨的页面
  const handleBBD = (e) => {
    // props.history.push("/index/bbd");
    navigate("/index/bbd");
  };

  // return (
  //   <Layout style={{ minHeight: "100vh" }}>
  //     <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
  //       <div className="logo" />
  //       <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
  //         <Menu.Item key="1">
  //           <Icon type="pie-chart" />
  //           <span>工作台</span>
  //         </Menu.Item>
  //         <Menu.Item key="2">
  //           <Icon type="desktop" />
  //           <span>添加文章</span>
  //         </Menu.Item>
  //         <SubMenu
  //           key="sub1"
  //           title={
  //             <span>
  //               <Icon type="user" />
  //               <span>文章管理</span>
  //             </span>
  //           }
  //         >
  //           <Menu.Item key="3">添加文章</Menu.Item>
  //           <Menu.Item key="4">文章列表</Menu.Item>
  //         </SubMenu>

  //         <Menu.Item key="9">
  //           <Icon type="file" />
  //           <span>留言管理</span>
  //         </Menu.Item>
  //       </Menu>
  //     </Sider>
  //     <Layout>
  //       <Header style={{ background: "#fff", padding: 0 }} />
  //       <Content style={{ margin: "0 16px" }}>
  //         <Breadcrumb style={{ margin: "16px 0" }}>
  //           <Breadcrumb.Item>后台管理</Breadcrumb.Item>
  //           <Breadcrumb.Item>工作台</Breadcrumb.Item>
  //         </Breadcrumb>
  //         <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
  //           博客工作台.
  //         </div>
  //       </Content>
  //       <Footer style={{ textAlign: "center" }}>JSPang.com</Footer>
  //     </Layout>
  //   </Layout>
  // );

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo"> JSPang System </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>工作台</span>
          </Menu.Item>

          <SubMenu
            key="sub1"
            onClick={handleClickArticle}
            title={
              <span>
                <Icon type="desktop" />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="addArticle">添加文章</Menu.Item>
            <Menu.Item key="articleList">文章列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="2" onClick={handleBBD}>
            <Icon type="file" />
            <span>大胖逼逼叨</span>
          </Menu.Item>

          <Menu.Item key="9">
            <Icon type="file" />
            <span>留言管理</span>
          </Menu.Item>

          <Menu.Item key="10" onClick={handleExit}>
            <Icon type="file" />
            <span>退出登录</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {/* <Routes>
              <Route path="/index/" element={<AddArticle />} />
              <Route path="/index/add/" element={<AddArticle />} />
              <Route path="/index/add/:id" element={<AddArticle />} />
              <Route path="/index/list/" element={<ArticleList />} />
              <Route path="/index/bbd/" element={<BBDList />} />
            </Routes> */}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>JSPang.com</Footer>
      </Layout>
    </Layout>
  );
}

export default AdminIndex;

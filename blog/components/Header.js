import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";
import servicePath from "../config/apiUrl";
import styles from "./header.module.css";
import { Row, Col, Menu, Icon } from "antd";
import {
  HomeOutlined,
  VideoCameraOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const Header = () => {
  // const [navArray, setNavArray] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(servicePath.getTypeInfo).then((res) => {
  //       setNavArray(res.data.data);
  //       return res.data.data;
  //     });
  //     setNavArray(result);
  //   };
  //   fetchData();
  // }, []);

  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push("/");
    } else {
      Router.push("/list?id=" + e.key);
    }
  };

  return (
    <div className={styles.header}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className={styles.header_logo}>技术胖</span>
          <span className={styles.header_txt}>
            专注前端开发,每年100集免费视频。
          </span>
        </Col>

        <Col className={styles.memu_div} xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <HomeOutlined />
              &nbsp; 首页
            </Menu.Item>
            <Menu.Item key="1">
              <VideoCameraOutlined />
              &nbsp; 视频教程
            </Menu.Item>
            <Menu.Item key="3">
              <SmileOutlined />
              &nbsp; 生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

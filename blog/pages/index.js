import React, { useState } from "react";
import Head from "next/head";
import { Row, Col, List, Icon } from "antd";
import Header from "../components/Header";
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import axios from "axios";
import servicePath from "../config/apiUrl";
import ReactMarkdown from "react-markdown";

const Home = (res) => {
  const [mylist, setMylist] = useState(res.data);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-box" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title">
                    <Link
                      href={{ pathname: "/detailed", query: { id: item.id } }}
                    >
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span>
                      <CalendarOutlined /> {item.addTime}
                    </span>
                    <span>
                      <FolderOutlined /> {item.typeName}
                    </span>
                    <span>
                      <FireOutlined /> {item.viewCount}人
                    </span>
                  </div>
                  {/* <div className="list-context">{item.introduce}</div> */}
                  <div className="list-context">
                    <ReactMarkdown>{item.introduce}</ReactMarkdown>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm_box" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios(servicePath.getArticleList).then((res) => {
      //console.log('远程获取数据结果:',res.data.data)
      resolve(res.data);
    });
  });

  return await promise;
};

export default Home;

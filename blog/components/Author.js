import { Avatar, Divider, Row } from "antd";
import styles from "./author.module.css";
import { GithubOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";

const Author = () => {
  return (
    <div className={`${styles.author_dive} ${styles.comm_box}`}>
      <div>
        {" "}
        <Avatar
          size={100}
          src="https://img2.baidu.com/it/u=935844076,1867088895&fm=253&fmt=auto&app=138&f=JPEG?w=278&h=287"
        />
      </div>
      <div className={styles.author_introduction}>
        光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
        <Divider>社交账号</Divider>
        <Row className="comm-main" type="flex" justify="center">
          <Avatar
            size={28}
            icon={<GithubOutlined />}
            className={styles.account}
          />
          <Avatar size={28} icon={<QqOutlined />} className={styles.account} />
          <Avatar
            size={28}
            icon={<WechatOutlined />}
            className={styles.account}
          />
        </Row>
      </div>
    </div>
  );
};

export default Author;

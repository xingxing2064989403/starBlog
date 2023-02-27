import {Menu, MenuProps, Col, Row, Affix,Image} from "antd";
import React, {useState} from "react";
import {
    AppstoreOutlined,
    GithubOutlined,
    GitlabOutlined,
    InfoOutlined, ReconciliationOutlined,
    SettingOutlined
} from "@ant-design/icons";
import styles from './index.less'
import {history} from 'umi';
import {AUTHOR_AVATAR} from "@/constants";



const items: MenuProps['items'] = [
    {
        label: '主页',
        key: '/blog/home',
        // eslint-disable-next-line react/jsx-no-undef
        icon: <img src={'https://staraway.love/%E4%B8%BB%E9%A1%B5.svg'} alt={"666"} width={20}/>,
    },
    {
        label: '建站日志',
        key: '/blog/stationLog',
        icon: <AppstoreOutlined/>,
        disabled: true,
    },
    {
        label: '技术篇',
        key: '/blog/skill',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                children: [
                    {
                        label: 'java',
                        key: '/blog/skill/java',
                    },
                    {
                        label: 'react',
                        key: '/blog/skill/react',
                    },
                ],
            },
        ],
    },
    {
        label: '随笔',
        key: '/blog/life',
        icon: <ReconciliationOutlined/>,
    },
    {
        label: '关于',
        key: '/blog/aboutMe',
        icon: <InfoOutlined spin={true}/>,
        disabled: true,
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Github仓库
            </a>
        ),
        icon: <GithubOutlined/>,
        key: 'Github',
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Gitee仓库
            </a>
        ),
        icon: <GitlabOutlined/>,
        key: 'Gitee',

    },
];


const HeaderNav: React.FC = (props) => {

    const [current, setCurrent] = useState('/blog/home');


    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key)
        if (e.key !== location.pathname) {
            history.push(e.key);
        }
    };

    return (
        <Affix offsetTop={0}>
            <Row justify={"center"} className={styles.row}>
                <Col xs={0} sm={0} md={10} lg={10} xl={10} offset={2} className={styles.starBlog}>
                    <div className={styles.slog}>
                        <Image
                            width={40}
                            style={{borderRadius:50}}
                            src={AUTHOR_AVATAR}
                            />
                        <span> 小星的博客 </span>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <Menu onClick={onClick}
                          selectedKeys={[current]}
                          mode="horizontal"
                          inlineIndent={5}
                          className={styles.menuNav}
                          items={items}/>
                </Col>
            </Row>
        </Affix>
    )
}


export default HeaderNav;

import React, {useState} from 'react';
import {Layout} from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import ArdButton from "../ui-kit/ard-button";
import ArdSideMenu from "../ui-kit/ard-side-menu";

const { Header, Content} = Layout;

const Default = (props) => {
    let [isOpen, setMenuOpen] = useState(false);
    return (
        <Layout>
            <ArdSideMenu isOpen={isOpen} setOpen={setMenuOpen} />
            <Layout className="site-layout">
                <Header
                    style={{background: "#448eff", padding: "0 24px"}}
                >
                    <ArdButton
                        onClick={() => setMenuOpen(!isOpen)}
                        shape="circle"
                        icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    ></ArdButton>
                </Header>
                <Content
                    style={{
                        padding: "12px 24px",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}
                >
                    <Layout style={{background: "transparent"}}>
                        {props.children}
                    </Layout>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Default;

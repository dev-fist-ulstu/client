import React from 'react';
import {Drawer, Menu} from "antd";
import PropTypes from "prop-types";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const ArdSideMenu = (props) => {
    return (
        <Drawer
            open={props.isOpen}
            onClose={() => { props.setOpen(false); }}
            placement="left"
            title="Навигация"
            style={{padding: "8px 0px"}}
        >
            <Menu
                theme="light"
                mode="inline"
                style={{height: "100%", width: "100%"}}
                items={items2}
            />
        </Drawer>
    );
};

ArdSideMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default ArdSideMenu;

import React from 'react';
import {Collapse} from "antd";
import {RightCircleTwoTone} from "@ant-design/icons";
import PropTypes from "prop-types";

const {Panel} = Collapse;

const ArdCollapse = (props) => {
    return (
        <Collapse
            style={{border: "1px solid #1677ff", background: "#fafafa", marginTop: props.marginTop ?? "0"}}
            defaultActiveKey={props.collapsed ?? ["1"]}
            expandIcon={({isActive}) => <RightCircleTwoTone rotate={isActive ? 90 : 0} /> }
            {...props.collapseProps}
        >
            <Panel key="1" header={props.header}>
                {props.children}
            </Panel>
        </Collapse>
    );
};

ArdCollapse.propTypes = {
    collapsed: PropTypes.bool,
    header: PropTypes.string,
    collapseProps: PropTypes.object
}

export default ArdCollapse;

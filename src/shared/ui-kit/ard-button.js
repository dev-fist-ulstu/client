import React from 'react';
import {Button} from "antd";

const ArdButton = (props) => {
    return (
        <Button
            {...props}
        >
            {props.children}
        </Button>
    );
};

export default ArdButton;

import React from 'react';
import {Checkbox} from "formik-antd";
import PropTypes from "prop-types";
import {Tooltip} from "antd";
import {useField} from "formik";

import "./ard-checkbox.css";

const ArdCheckbox = (props) => {
    const [field, meta, helpers] = useField(props.name);

    return (
        <Tooltip
            title={meta.error}
            placement="topLeft"
        >
            <Checkbox.Group
                name={props.name}
                options={props.options}
                style={{display: "flex", flexDirection: "column", width: "250px"}}
                className={meta.error ? "checkbox-error" : null}
                {...props.checkboxProps}
            />
        </Tooltip>
    );
};

ArdCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    checkboxProps: PropTypes.object
}

export default ArdCheckbox;

import React from 'react';
import {Input} from "formik-antd";
import {Col, Row} from "antd";
import {useField} from "formik";
import PropTypes from "prop-types";
import {Tooltip} from "antd";

const ArdInput = (props) => {
    const [field, meta, helpers] = useField(props.name);

    return (
        <Row style={{marginTop: "1rem", alignItems: "center"}}>
            <Col span={6} style={{maxWidth: "100%", overflow: "hidden", overflowWrap: "anywhere"}}>
                <label htmlFor={props.name}>{props.label}</label>
            </Col>
            <Col span={18} style={{paddingLeft: "1rem"}}>
                <Tooltip
                    title={meta.error}
                >
                    {props.isPassword && (
                        <Input.Password
                            name={props.name}
                            style={{maxWidth: "250px"}}
                            size="small"
                            status={meta.error ? "error" : null}
                            {...props.inputProps}
                        />
                    )}
                    {!props.isPassword && (
                        <Input
                            name={props.name}
                            style={{maxWidth: "250px"}}
                            size="small"
                            status={meta.error ? "error" : null}
                            {...props.inputProps}
                        />
                    )}
                </Tooltip>

            </Col>
        </Row>

    );
};

ArdInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    inputProps: PropTypes.object,
    isPassword: PropTypes.bool
}

export default ArdInput;

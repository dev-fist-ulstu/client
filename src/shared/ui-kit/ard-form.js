import React, {useEffect} from 'react';
import {Form, Formik} from "formik";
import ArdButton from "./ard-button";
import PropTypes from 'prop-types';
import useAxios from "../hooks/use-axios";

function ArdForm(props) {
    function submitForm(val) {
        console.log(val)
    }

    return (
        <Formik
            initialValues={props.initialValues ?? {}}
            onSubmit={props.onSubmit ?? submitForm}
            validationSchema={props.validationSchema}
        >
            {(formik) => (
                <Form>
                    <h2>{props.formHeader}</h2>
                    <div style={{marginTop: "1rem"}}>
                        {typeof props.children === "function" ? props.children(formik) : props.children}
                    </div>
                    <div style={{marginTop: "1rem", display: "flex", flexDirection: "row", justifyContent: "end"}}>
                        <div>
                            {props.showPreview && <ArdButton>Предпросмотр</ArdButton>}
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "end"}}>
                            <div>
                                <ArdButton htmlType="submit">{props.textConfirm ?? "Подтвердить"}</ArdButton>
                            </div>
                            <div style={{marginLeft: "1rem"}}>
                                <ArdButton htmlType="reset">Очистить</ArdButton>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

ArdForm.propTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func,
    validationSchema: PropTypes.object,
    urlTemplate: PropTypes.string,
    methodTemplate: PropTypes.string,
    urlAction: PropTypes.string,
    methodAction: PropTypes.string,
    formHeader: PropTypes.string,
    textConfirm: PropTypes.string,
    showPreview: PropTypes.bool
}

export default ArdForm;

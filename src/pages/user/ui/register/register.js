import React from 'react';
import ArdForm from "../../../../shared/ui-kit/ard-form";
import ArdCollapse from "../../../../shared/ui-kit/ard-collapse";
import ArdInput from "../../../../shared/ui-kit/ard-input";
import registerSchema from "../../model/register/register-schema";

const Register = (props) => {
    return (
        <div className="d-sm">
            <ArdForm
                formHeader="Регистрация пользователя"
                validationSchema={registerSchema}
            >
                <ArdCollapse>
                    <ArdInput name="username" label="Имя пользователя" />
                    <ArdInput name="password" label="Пароль" isPassword />
                    <ArdInput name="passwordRepeat" label="Повторите пароль" isPassword />
                    <ArdInput name="email" label="Почта" />
                </ArdCollapse>
            </ArdForm>
        </div>
    );
};

export default Register;

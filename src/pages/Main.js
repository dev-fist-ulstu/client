import React from 'react';
import ArdCollapse from "../shared/ui-kit/ard-collapse";
import ArdInput from "../shared/ui-kit/ard-input";
import ArdCheckbox from "../shared/ui-kit/ard-checkbox/ard-checkbox";
import ArdForm from "../shared/ui-kit/ard-form";
import ArdEditor from "../shared/ui-kit/ard-editor";
import * as yup from "yup";

const valid = yup.object({
    asd: yup.string().max(15, "Чёта дохуя ввёл, пошёл нахуй"),
    qwe: yup.array().min(1, "Элементы где, мудак?"),
    qweQwe: yup.array().min(1, "Элементы где, мудак1?"),
})

const Main = () => {
    return (
        <div className="d-md">
            <ArdForm
                formHeader="Регистрация говна"
                validationSchema={valid}
            >
                <ArdCollapse header="Залупа говна">
                    <ArdInput
                        type="text"
                        name="asd"
                        label="Привет"
                    />
                    <ArdInput type="text" name="asd1" label="йцуйцуйцуйцуйцуйцу"/>
                    <ArdInput
                        type="text"
                        name="asd2"
                        label="вапрваправпрвапрвап23423424323рвапрв ываыва ыв ааыв апd1"
                    />
                    <ArdCollapse marginTop="1rem" header="Комиссия">
                        <ArdCheckbox
                            name="qwe"
                            options={[
                                {label: "Первый", value: "first"},
                                {label: "Второй", value: "second"},
                                {label: "Третий", value: "third"},
                            ]}
                        />
                        <ArdCheckbox
                            name="qweQwe"
                            options={[
                                {label: "Первый", value: "first"},
                                {label: "Второй", value: "second"},
                                {label: "Третий", value: "third"},
                            ]}
                        />
                    </ArdCollapse>
                    <ArdEditor name="fuckmyass" />
                </ArdCollapse>
            </ArdForm>
        </div>
    );
};

export default Main;

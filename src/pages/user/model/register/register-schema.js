import * as yup from "yup";

export default yup.object({
    username: yup
        .string()
        .required("Обязательное поле.")
        .max(30, "Имя пользователя не может быть больше 30 символов"),
    password: yup
        .string()
        .required("Обязательное поле.")
        .min(6, "Поле не может быть меньше 6 символов")
        .max(30, "Поле не может быть больше 30 символов"),
    passwordRepeat: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли не совпадают"),
    email: yup
        .string()
        .email("Допущена ошибка при вводе электронной почты")
        .required("Обязательное поле")
})

import React, { useContext } from "react";
import { MyContext } from "../../Context/Context";
import Input from "../Input/Input"
import { ErrorMessage, useFormik } from 'formik';
import { ButtonForm } from "../Button/ButtonStyled";
import * as Yup from 'yup';

export default function FormRegister(props) {
    const { handleSignUp } = useContext(MyContext);

    const changePage = async (values) => {
        await handleSignUp(values);
        props.history.push("/home");
    };

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
        repeatpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repeatpassword: ""
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            // if (values.password != values.repeatpassword) {
            //     return
            // };
            changePage(values);
        },
    });

    console.log(formik.errors)
    console.log(formik.errors.email)

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    placeholder="Name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <Input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <Input
                    placeholder="Repeat password"
                    name="repeatpassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.repeatpassword}
                />

                <ButtonForm type="submit">START WATCHING</ButtonForm>
            </form>
        </>

    )
}
import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";
import Input from "../Input/Input"
import { ErrorMessage, useFormik } from 'formik';
import { ButtonForm } from "../Button/ButtonStyled";
import * as Yup from 'yup';
import { LoadLogin } from "../logo/Loading";
import gif from "../../images/gif/completed.gif";
import { DivLogo } from "../logo/logoStyle";

export default function FormRegister(props) {
    const { handleSignUp } = useContext(MyContext);
    const [load, setLoad] = useState(false);

    const changePage = async (values) => {
        setLoad(true)
        await handleSignUp(values);
        setLoad(false)
        props.history.push("/home");
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            repeatpassword: ""
        },
        onSubmit: values => {
            changePage(values);
        },
    });

    if (load) {
        return(
            <DivLogo>
                <LoadLogin src={gif} />
            </DivLogo>
        )
    };

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
import Input from "../Input/Input"
import { Text, TextCreatAcount } from "./Form"
import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import React, { useContext } from "react";
import { ButtonForm } from "../Button/ButtonStyled";
import { MyContext } from "../../Context/Context";

export default function FormLogin(props) {

    const { handleLogin } = useContext(MyContext);

    const changePage = async (values) => {
        await handleLogin(values);
        props.history.push("/home");
    }

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: values => {
            changePage(values);
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <Text>Forgot your password?   <span>Click here.</span> </Text>
                <TextCreatAcount><Link to={`login/signup`}>I don't have an account yet. </Link></TextCreatAcount>

                <ButtonForm type="submit">START WATCHING</ButtonForm>

            </form>
        </>
    )
}
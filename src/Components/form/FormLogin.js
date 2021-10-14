import Input from "../Input/Input"
import { Text, TextCreatAcount } from "./Form"
import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import React, { useContext } from "react";
import { ButtonForm } from "../Button/ButtonStyled";
import { MyContext } from "../../Context/Context";
import gif from "../../images/gif/completed.gif"
import * as Yup from 'yup';
import { DivErro, MessageErro } from "../Input/InputStyle";

export default function FormLogin(props) {

    const { handleLogin, loading } = useContext(MyContext);

    // const SignupSchema = Yup.object().shape({
    //     email: Yup.string()
    //         .email('Invalid email')
    //         .required('Required'),
    //     password: Yup.string()
    //         .required('Required'),
    // });

    const changePage = async (values) => {
        await handleLogin(values);
        props.history.push("/home");
    }

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: values => {
            if (values.email === "" || values.password === "") {
                return
            }
            changePage(values);
        }
    });

    if (loading) {
        return <img src={gif} />
    }

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
                {/* <DivErro>
                    {formik.errors.email && formik.touched.email ? (<>
                        <MessageErro>{formik.errors.email}</MessageErro>
                    </>
                    ) : null}
                    {formik.errors.password && formik.touched.password ? (<>
                        <MessageErro>{formik.errors.password}</MessageErro>
                    </>
                    ) : null}
                </DivErro> */}
                <Text>Forgot your password?   <span>Click here.</span> </Text>
                <TextCreatAcount><Link to={`login/signup`}>I don't have an account yet. </Link></TextCreatAcount>

                <ButtonForm type="submit">START WATCHING</ButtonForm>

            </form>
        </>
    )
}
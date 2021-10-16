import Input from "../Input/Input";
import { ErroText, Text, TextCreatAcount } from "./Form.style";
import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import React, { useContext, useState } from "react";
import { ButtonForm } from "../Button/ButtonStyled";
import { MyContext } from "../../Context/Context";
import gif from "../../images/gif/completed.gif";
import * as Yup from 'yup';
import { DivErro, MessageErro } from "../Input/InputStyle";
import { Load, LoadLogin } from "../logo/Loading";

export default function FormLogin(props) {

    const { handleLogin, loading, authenticated } = useContext(MyContext);
    const [userValidation, setValidation] = useState(null);
    const [load, setLoad] = useState(false);
    const [invalid, setInvalid] = useState(false);


    // const SignupSchema = Yup.object().shape({
    //     email: Yup.string()
    //         .email('Invalid email')
    //         .required('Required'),
    //     password: Yup.string()
    //         .required('Required'),
    // });

    const changePage = async (values) => {
        setLoad(true)
        const response = await handleLogin(values);

        if (response === "Usuário inválido") {
            setLoad(false)
            setInvalid(true)
        }else{
            setLoad(false)
            props.history.push("/home");
        }
       
    }

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        onSubmit: values => {
            if (values.email === "" || values.password === "") {
                return
            };
            changePage(values);
        }
    });

    if (load) {
        return <LoadLogin src={gif} />
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
                    { formik.touched.email && !authenticated ? (<>
                        <MessageErro>{formik.errors.email}</MessageErro>
                    </>
                    ) : null}
                     { formik.touched.password && !authenticated? (<>
                        <MessageErro>{formik.errors.password}</MessageErro>
                    </>
                    ) : null}
                </DivErro> */}
                {invalid?<ErroText>User not found</ErroText>:<></>}
                <Text>Forgot your password?   <span>Click here.</span> </Text>
                <TextCreatAcount><Link to={`login/signup`}>I don't have an account yet. </Link></TextCreatAcount>

                <ButtonForm type="submit">START WATCHING</ButtonForm>

            </form>
        </>
    )
}
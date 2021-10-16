import Input from "../Input/Input";
import { ErroText, Text, TextCreatAcount } from "./Form.style";
import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import React, { useContext, useState } from "react";
import { ButtonForm } from "../Button/ButtonStyled";
import { MyContext } from "../../Context/Context";
import gif from "../../images/gif/completed.gif";
import { Load, LoadLogin } from "../logo/Loading";
import { DivLogo } from "../logo/logoStyle";

export default function FormLogin(props) {

    const { handleLogin, loading, authenticated } = useContext(MyContext);
    const [userValidation, setValidation] = useState(null);
    const [load, setLoad] = useState(false);
    const [invalid, setInvalid] = useState(false);


    const changePage = async (values) => {
        setLoad(true)
        const response = await handleLogin(values);

        if (response === "Usuário inválido") {
            setLoad(false)
            setInvalid(true)
        } else {
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
        return (
            <DivLogo>
                <LoadLogin src={gif} />
            </DivLogo>
        )
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
                {invalid ? <ErroText>User not found</ErroText> : <></>}
                <Text>Forgot your password?   <span>Click here.</span> </Text>
                <TextCreatAcount><Link to={`login/signup`}>I don't have an account yet. </Link></TextCreatAcount>

                <ButtonForm type="submit">START WATCHING</ButtonForm>

            </form>
        </>
    )
}
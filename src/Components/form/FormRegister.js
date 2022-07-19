import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";
import Input from "../Input/Input";
import { ErrorMessage, useFormik } from "formik";
import { ButtonForm } from "../Button/ButtonStyled";
import * as Yup from "yup";
import { LoadLogin } from "../logo/Loading";
import gif from "../../images/gif/completed.gif";
import { DivLogo } from "../logo/logoStyle";
import { ErroText } from "./Form.style";

export default function FormRegister(props) {
  const { handleSignUp } = useContext(MyContext);
  const [load, setLoad] = useState(false);
  const [feedback, setFeedback] = useState({
    valid: false,
    message: "",
    error: false,
  });

  const changePage = async (values) => {
    try {
      setLoad(true);
      const { error } = await handleSignUp(values);
      if (error) throw new Error(error);
      setLoad(false);
      setFeedback(() => ({ valid: true, message: "ok", error: false }));
      props.history.push("/home");
    } catch (error) {
      
      setLoad(false);
      setFeedback(() => ({
        valid: false,
        message: error.message,
        error: true,
      }));
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatpassword: "",
    },
    onSubmit: (values) => {
      changePage(values);
    },
  });

  if (load) {
    return (
      <DivLogo>
        <LoadLogin src={gif} />
      </DivLogo>
    );
  }

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
        {feedback.error ? (
          <ErroText> {errorFeedback[feedback.message]}</ErroText>
        ) : (
          <></>
        )}
        <ButtonForm type="submit">START WATCHING</ButtonForm>
      </form>
    </>
  );
}

const errorFeedback = {
  "Different passwords": "Senhas diferentes",
  "User already exists.":"Já existe uma conta com esse email."
};

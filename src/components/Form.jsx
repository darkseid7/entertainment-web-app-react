import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "../context/Auth";
import AlertMessage from "./AlertMessage";

const StyledForm = styled.form``;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 24px;
  padding: 0 14px 14px;
  font-size: 15px;
  font-weight: 300;
  opacity: 0.5;
  caret-color: ${({ theme }) => theme.colors.buttonColor};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.underlineColor};

  &:focus {
    opacity: 1;
    border-color: ${({ isEmpty }) => (isEmpty ? `#FC4747` : `#5A698F`)};

    &::placeholder {
      opacity: 0.5;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  margin-top: 26px;
  padding: 14px 0;
  font-size: 15px;
  font-weight: 300;
  text-align: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fontColor};
    color: ${({ theme }) => theme.colors.bgColor};
  }
`;

const ErrorMessage = styled.span`
  position: absolute;
  top: 0.3rem;
  right: 1.4rem;
  font-size: 13px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.buttonColor};
`;

function Form({ buttonText, isSignUp }) {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    failedRegister: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, repeatPassword } = formData;
    let formIsValid = true;

    const newErrors = {
      email: "",
      password: "",
      repeatPassword: "",
      failedRegister: "",
    };

    if (email.trim() === "") {
      newErrors.email = "Can&apos;t be empty";
      formIsValid = false;
    }

    if (password.trim() === "") {
      newErrors.password = "Can&apos;t be empty";
      formIsValid = false;
    }

    // if (repeatPassword.trim() === "") {
    //   newErrors.repeatPassword = "Can&apos;t be empty";
    //   formIsValid = false;
    // }

    if (formIsValid) {
      try {
        await signUp(formData.email, formData.password);
        navigate("/");
      } catch (error) {
        newErrors.failedRegister = error.message;
        console.log(newErrors.failedRegister);
        setVisible(true);
      }
    }

    setErrors(newErrors);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          onChange={handleInputChange}
          name="email"
          type="text"
          placeholder="Email address"
        />
        {errors.email && <ErrorMessage>Can&apos;t be empty</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <Input
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && <ErrorMessage>Can&apos;t be empty</ErrorMessage>}
      </InputContainer>
      {isSignUp && (
        <InputContainer>
          <Input
            onChange={handleInputChange}
            name="repeatPassword"
            type="password"
            placeholder="Repeat Password"
          />
          {errors.repeatPassword && (
            <ErrorMessage>Can&apos;t be empty</ErrorMessage>
          )}
        </InputContainer>
      )}
      <Button type="submit">{buttonText}</Button>
      {errors.failedRegister && (
        <AlertMessage
          visible={visible}
          setVisible={setVisible}
          text={errors.failedRegister}
        />
      )}
    </StyledForm>
  );
}

export default Form;

import { useEffect, useState } from "react";
import styled from "styled-components";

import { GlobalStyles } from "../../Styled-components/GlobalStyles.js";

import { ReactComponent as IconNavLogo } from "../../assets/logo.svg";
import { StyledTitle } from "../../Styled-components/Title.js";
import { media } from "../../Styled-components/GlobalStyles.js";
import { Link } from "react-router-dom";

const StyledLogin = styled.main`
  display: grid;
  place-items: center;
  height: 100%;

  ${media.phone} {
    padding: 0 24px;
  }
`;

const LoginCard = styled.div`
  width: 400px;
  height: 373px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primaryColor};

  h2 {
    padding-left: 0px;
    margin-bottom: 40px;
  }

  ${media.phone} {
    width: 327px;
    padding: 24px;
  }
`;

const Logo = styled.div`
  margin-top: 78px;
  margin-bottom: 82px;

  ${media.phone} {
    margin-top: 48px;
    margin-bottom: 58px;
  }
`;

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

const SignUpText = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 15px;
  font-weight: 300;

  a {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.buttonColor};
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

function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isEmpty1, setIsEmpty1] = useState(false);
  const [isEmpty2, setIsEmpty2] = useState(false);

  useEffect(() => {
    if (emailInput.trim() === "") {
      setIsEmpty1(true);
    } else {
      setIsEmpty1(false);
    }
    if (passwordInput.trim() === "") {
      setIsEmpty2(true);
    } else {
      setIsEmpty2(false);
    }
  }, [emailInput, passwordInput]);

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailInput.trim() !== "" && passwordInput.trim() !== "") {
      console.log("Enviar formulario");
    }
  };

  return (
    <>
      <GlobalStyles />
      <StyledLogin>
        <Logo>
          <IconNavLogo />
        </Logo>
        <LoginCard>
          <StyledTitle>Login</StyledTitle>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <Input
                onChange={(e) => handleInputChange(e, setEmailInput)}
                type="text"
                placeholder="Email address"
              />
              {isEmpty1 && <ErrorMessage>Can&apos;t be empty</ErrorMessage>}
            </InputContainer>
            <InputContainer>
              <Input
                onChange={(e) => handleInputChange(e, setPasswordInput)}
                type="password"
                placeholder="Password"
              />
              {isEmpty2 && <ErrorMessage>Can&apos;t be empty</ErrorMessage>}
            </InputContainer>
            <Link to={"/home"}>
              <Button type="submit">Login to your account</Button>
            </Link>
          </form>
          <SignUpText>
            Don&apos;t have an account? <a href="">Sign Up</a>
          </SignUpText>
        </LoginCard>
      </StyledLogin>
    </>
  );
}

export default Login;

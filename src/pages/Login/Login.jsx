import { Link } from "react-router-dom";
import styled from "styled-components";

import { GlobalStyles } from "../../Styled-components/GlobalStyles.js";

import { ReactComponent as IconNavLogo } from "../../assets/logo.svg";
import { StyledTitle } from "../../Styled-components/Title.js";
import { media } from "../../Styled-components/GlobalStyles.js";
import Form from "../../components/Form.jsx";

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

const SignUpText = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 15px;
  font-weight: 300;

  a {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.buttonColor};
    &:hover {
      color: ${({ theme }) => theme.colors.fontColor};
    }
  }
`;

function Login() {
  return (
    <>
      <GlobalStyles />
      <StyledLogin>
        <Logo>
          <IconNavLogo />
        </Logo>
        <LoginCard>
          <StyledTitle>Login</StyledTitle>
          <Form buttonText={"Login to your account"} />
          <SignUpText>
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </SignUpText>
        </LoginCard>
      </StyledLogin>
    </>
  );
}

export default Login;

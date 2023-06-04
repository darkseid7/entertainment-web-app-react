import { Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "../../Styled-components/GlobalStyles";

import { ReactComponent as IconNavLogo } from "../../assets/logo.svg";
import { StyledTitle } from "../../Styled-components/Title";
import { media } from "../../Styled-components/GlobalStyles";
import Form from "../../components/Form";

const StyledSignUp = styled.main`
  display: grid;
  place-items: center;
  height: 100%;
  position: relative;

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

const LoginText = styled.p`
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

function SingUP() {
  return (
    <>
      <GlobalStyles />
      <StyledSignUp>
        <Logo>
          <IconNavLogo />
        </Logo>
        <LoginCard>
          <StyledTitle>Sign Up</StyledTitle>
          <Form buttonText={"Create an account"} isSignUp />
          <LoginText>
            Already have an account? <Link to="/login">Login</Link>
          </LoginText>
        </LoginCard>
      </StyledSignUp>
    </>
  );
}

export default SingUP;

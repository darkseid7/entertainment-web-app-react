import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useAuth } from "../context/Auth";
import { media } from "../Styled-components/GlobalStyles";
import imgAvatar from "../assets/image-avatar.png";
import imgAnonymous from "../assets/favicon-32x32.png";
import { useState } from "react";

const StyledUser = styled.div`
  position: relative;
  .popup {
    width: 200px;
    padding: 18px;
    top: -20px;
    left: 85px;
    position: absolute;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    z-index: 2;
    display: flex;
    flex-direction: column;

    ${media.tablet} {
      left: -136px;
      top: 70px;
    }

    ${media.phone} {
      left: -154px;
      top: 62px;
    }

    button {
      margin: 6px 0;
      padding: 5px 10px;
      text-align: center;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.buttonColor};
      cursor: pointer;
    }
  }
`;
const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;

  ${media.phone} {
    width: 30px;
    height: 30px;
  }
`;
function User() {
  const { user, logOut } = useAuth();
  const email = user?.email;
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setVisible(!visible);
  };

  const handleLogOut = async () => {
    await logOut();
    setVisible(false);
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <StyledUser>
      {email ? (
        <Link onClick={handleShow}>
          <AvatarImg src={imgAvatar} alt="" />
        </Link>
      ) : (
        <Link onClick={handleShow}>
          <AvatarImg src={imgAnonymous} alt="" />
        </Link>
      )}

      {visible && (
        <div className="popup">
          {email ? (
            <button onClick={handleLogOut}>Logout</button>
          ) : (
            <>
              <button onClick={handleLogIn}>Login</button>
              <button onClick={handleSignUp}>Sign Up</button>
            </>
          )}
        </div>
      )}
    </StyledUser>
  );
}

export default User;

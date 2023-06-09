import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useAuth } from "../context/Auth";
import { ReactComponent as IconNavLogo } from "../assets/logo.svg";
import { ReactComponent as IconNavHome } from "../assets/icon-nav-home.svg";
import { ReactComponent as IconNavMovies } from "../assets/icon-nav-movies.svg";
import { ReactComponent as IconNavSeries } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as IconNavBookmark } from "../assets/icon-nav-bookmark.svg";
import User from "./User";

import { media } from "../Styled-components/GlobalStyles";

const StyledHeader = styled.header`
  width: 96px;
  height: 960px;
  margin-right: 36px;
  padding: 32px 28px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primaryColor};

  ${media.tablet} {
    width: 98%;
    height: 72px;
    padding: 24px;
  }

  ${media.phone} {
    width: 100%;
    padding: 16px;
    border-radius: 0;
    /* position: fixed;
    top: 0px;
    z-index: 1000; */
  }
`;

const StyledNav = styled.nav`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${media.tablet} {
    width: 100%;
    flex-direction: initial;
  }
`;

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:nth-child(2) {
    height: 76%;
    justify-content: start;

    ${media.tablet} {
      height: 100%;
      justify-content: space-between;
    }
  }

  a {
    width: 100%;
    display: grid;
    place-items: center;
    margin-bottom: 40px;
    cursor: pointer;

    &:hover {
      svg {
        path {
          fill: ${({ theme }) => theme.colors.buttonColor};
        }
      }
    }

    &.active {
      svg {
        path {
          fill: ${({ theme }) => theme.colors.fontColor};
        }
      }
    }
  }

  ${media.tablet} {
    width: initial;
    flex-direction: initial;

    &:nth-child(2) {
      width: 172px;
    }

    a {
      width: initial;
      display: initial;
      &:first-child {
        margin-bottom: 0;
      }

      margin-bottom: 0px;
    }
  }
`;

const StyledHomeSvg = styled(motion.svg)`
  width: 33px;
  height: 25.6px;
`;

const StyledSvg = styled(motion.svg)`
  width: 20px;
  height: 20px;
`;

function Header() {
  const { user } = useAuth();
  const email = user?.email;
  return (
    <StyledHeader>
      <StyledNav>
        <NavLink to={"/"}>
          <StyledHomeSvg whileHover={{ scale: 1.1, rotate: -10 }}>
            <IconNavLogo />
          </StyledHomeSvg>
        </NavLink>
        <IconsContainer>
          <NavLink to={"/home"}>
            <StyledSvg
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <IconNavHome />
            </StyledSvg>
          </NavLink>
          <NavLink to={"/movies"}>
            <StyledSvg
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <IconNavMovies />
            </StyledSvg>
          </NavLink>
          <NavLink to={"/series"}>
            <StyledSvg
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <IconNavSeries />
            </StyledSvg>
          </NavLink>
          {email && (
            <NavLink to={"/bookmarked"}>
              <StyledSvg
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <IconNavBookmark />
              </StyledSvg>
            </NavLink>
          )}
        </IconsContainer>
        <IconsContainer>
          <User />
        </IconsContainer>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as IconNavLogo } from "../assets/logo.svg";
import { ReactComponent as IconNavHome } from "../assets/icon-nav-home.svg";
import { ReactComponent as IconNavMovies } from "../assets/icon-nav-movies.svg";
import { ReactComponent as IconNavSeries } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as IconNavBookmark } from "../assets/icon-nav-bookmark.svg";
import imgAvatar from "../assets/image-avatar.png";

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

const StyledHomeSvg = styled.svg`
  width: 33px;
  height: 25.6px;
`;

const StyledSvg = styled.svg`
  width: 20px;
  height: 20px;
`;

const StyledAvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;

  ${media.phone} {
    width: 30px;
    height: 30px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <NavLink to={"/"}>
          <StyledHomeSvg>
            <IconNavLogo />
          </StyledHomeSvg>
        </NavLink>
        <IconsContainer>
          {/* <StyledHomeImg src={iconNavLogo} alt="" /> */}
          <NavLink to={"/home"}>
            <StyledSvg>
              <IconNavHome />
            </StyledSvg>
            {/* <StyledImg src={IconNavHome} alt="" /> */}
          </NavLink>
          <NavLink to={"/movies"}>
            <StyledSvg>
              <IconNavMovies />
            </StyledSvg>
            {/* <StyledImg src={iconNavMovies} alt="" /> */}
          </NavLink>
          <NavLink to={"/series"}>
            <StyledSvg>
              <IconNavSeries />
            </StyledSvg>
            {/* <StyledImg src={iconNavSeries} alt="" /> */}
          </NavLink>
          <NavLink to={"/bookmarked"}>
            <StyledSvg>
              <IconNavBookmark />
            </StyledSvg>
            {/* <StyledImg src={iconNavBookmark} alt="" /> */}
          </NavLink>
        </IconsContainer>
        <IconsContainer>
          <StyledAvatarImg src={imgAvatar} alt="" />
        </IconsContainer>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;

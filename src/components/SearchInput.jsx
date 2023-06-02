import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import { media, paddingRight } from "../Styled-components/GlobalStyles";
import iconSeach from "../assets/icon-search.svg";
import { useEffect, useState } from "react";

const StyledSearchInput = styled.div`
  width: 100%;
  height: 46px;
  margin-top: 30px;
  margin-bottom: 19px;
  padding-right: ${paddingRight};
  display: flex;

  ${media.tablet} {
    width: 100%;
    padding-right: 24px;
  }

  ${media.phone} {
    align-items: center;
    padding: 0 16px;
  }
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 24px;

  ${media.phone} {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding-bottom: 14px;
  font-size: 24px;
  font-weight: 300;
  opacity: 0.5;
  caret-color: ${({ theme }) => theme.colors.buttonColor};

  &:focus {
    opacity: 1;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.underlineColor};
    &::placeholder {
      opacity: 0.5;
    }
  }

  ${media.phone} {
    font-size: 16px;
    padding-bottom: 0;

    &:focus {
      opacity: 1;
      border-bottom: 0px solid;
    }
  }
`;

function SearchInput() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.target.value.length != 0) {
      navigate(`/${e.target.value}`);
    } else {
      navigate("/");
    }
  };

  return (
    <StyledSearchInput>
      <SearchIcon src={iconSeach} alt="" />
      <Input
        type="text"
        onChange={handleSearch}
        placeholder="Search for movies or TV series"
      />
    </StyledSearchInput>
  );
}

export default SearchInput;

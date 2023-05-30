import React from "react";
import styled from "styled-components";

import { media } from "../Styled-components/GlobalStyles";
import { ReactComponent as EmptyBookMark } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as FullBookMark } from "../assets/icon-bookmark-full.svg";

const StyledBookMark = styled.div`
  top: 16px;
  right: 24px;
  position: absolute;

  ${media.phone} {
    top: 8px;
    right: 8px;
  }
`;

const SaveBookMarkButton = styled.button`
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.bgColor};
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.fontColor};

    svg path {
      fill: ${({ theme }) => theme.colors.bgColor};
      stroke: ${({ theme }) => theme.colors.bgColor};
    }
  }
`;

function SaveBookmark({ isBookmarked }) {
  return (
    <StyledBookMark>
      <SaveBookMarkButton>
        {isBookmarked ? <FullBookMark /> : <EmptyBookMark />}
      </SaveBookMarkButton>
    </StyledBookMark>
  );
}

export default SaveBookmark;

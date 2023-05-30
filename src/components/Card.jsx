/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

import { media } from "../Styled-components/GlobalStyles";
import { ReactComponent as MovieSvg } from "../assets/icon-category-movie.svg";
import { ReactComponent as SerieSvg } from "../assets/icon-category-tv.svg";
import { ReactComponent as IconPlay } from "../assets/icon-play.svg";
import SaveBookmark from "../components/SaveBookmark";

const commonThumbnailStyles = css`
  width: 100%;
  height: 100%;
  max-width: 280px;
  max-height: 174px;
  border-radius: 8px;
`;

const StyledCard = styled.li`
  max-width: 280px;
  max-height: 226px;
  overflow: hidden;
  cursor: pointer;
`;

const CardContainer = styled.div`
  height: 226px;
  position: relative;

  ${media.phone} {
    height: unset;
  }
`;

const CardThumbnailContainer = styled.div`
  max-width: 280px;
  max-height: 174px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;

  &:hover {
    img {
      opacity: 0.5;
      transform: scale(1.05);
    }

    div {
      opacity: 1;
    }
  }
`;

const CardPlay = styled.div`
  opacity: 0;
  width: 117px;
  height: 48px;
  padding: 0 9px;
  top: 50%;
  left: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 255, 255, 0.25);
  border-radius: 28.5px;

  svg {
    margin-right: 19px;
  }

  ${media.phone} {
    display: none;
  }
`;

const CardPlaytext = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const CardThumbnail = styled.img`
  ${commonThumbnailStyles}
  transition: transform 0.3s ease 0s;
`;

const CardDescription = styled.div`
  width: 100%;
  padding-top: 6px;
  border-radius: 0px 0px 8px 8px;

  ${media.phone} {
    height: unset;
  }

  //en caso de agregar estilos dependiendo de alguna prop
  /* ${({ cardType }) => (cardType === "Trending" ? css`` : "")} */
`;

const CardDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardDetail = styled.span`
  font-size: 13px;
  font-weight: 300;
  opacity: 0.75;

  svg {
    margin-right: 6px;
  }
`;

const CardDetailSeparator = styled.span`
  margin: 0 8px;
  opacity: 0.75;
`;

const CardTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
`;

function Card({ cardData, cardIndex }) {
  const { isBookmarked, year, category, rating, title } = cardData;
  const { regular } = cardData.thumbnail;

  return (
    <StyledCard key={cardIndex}>
      <CardContainer>
        <CardThumbnailContainer>
          <CardThumbnail src={regular.small} alt="CardThumbnail" />
          <CardPlay>
            <IconPlay />
            <CardPlaytext>Play</CardPlaytext>
          </CardPlay>
        </CardThumbnailContainer>
        <SaveBookmark isBookmarked={isBookmarked} />
        <CardDescription>
          <CardDetailContainer>
            <CardDetail>{year}</CardDetail>
            <CardDetailSeparator>•</CardDetailSeparator>
            <CardDetail>
              {category === "Movie" ? <MovieSvg /> : <SerieSvg />}
              {category}
            </CardDetail>
            <CardDetailSeparator>•</CardDetailSeparator>
            <CardDetail> {rating}</CardDetail>
          </CardDetailContainer>
          <CardTitle>{title}</CardTitle>
        </CardDescription>
      </CardContainer>
    </StyledCard>
  );
}

export default Card;

/* eslint-disable react/prop-types */
import styled from "styled-components";

import { media } from "../../../Styled-components/GlobalStyles";
import { ReactComponent as MovieSvg } from "../../../assets/icon-category-movie.svg";
import { ReactComponent as SerieSvg } from "../../../assets/icon-category-tv.svg";
import { ReactComponent as IconPlay } from "../../../assets/icon-play.svg";

import SaveBookmark from "../../../components/SaveBookmark";

const StyledTrendingCard = styled.li`
  width: 470px;
  height: 230px;
  margin-right: 40px;
  margin-bottom: 4px;
  border-radius: 8px;
  overflow: hidden;
  scroll-snap-align: start;
  display: inline-block;
  cursor: pointer;

  ${media.phone} {
    width: 240px;
    height: 140px;
    margin-right: 16px;
  }
`;

const CardContainer = styled.div`
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

  ${media.phone} {
    height: 100%;
  }
`;

const CardThumbnailContainer = styled.div`
  position: relative;

  ${media.phone} {
    height: 100%;
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
  transition: transform 0.3s ease 0s;
  ${media.phone} {
    height: 100%;
  }
`;

const CardDescription = styled.div`
  width: 100%;
  height: 100px;
  padding: 24px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  border-radius: 0px 0px 8px 8px;
  z-index: 2;

  ${media.phone} {
    height: 70px;
    padding: 16px;
  }
`;

const CardDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardDetail = styled.span`
  font-size: 15px;
  font-weight: 300;
  opacity: 0.75;

  svg {
    margin-right: 6px;
  }

  ${media.phone} {
    font-size: 12px;
  }
`;

const CardDetailSeparator = styled.span`
  margin: 0 8px;
  opacity: 0.75;
  ${media.phone} {
    font-size: 12px;
  }
`;

const CardTitle = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 500;

  ${media.phone} {
    font-size: 15px;
  }
`;

function TrendingCard({ cardData, index }) {
  const { isBookmarked, year, category, rating, title } = cardData;
  const { trending } = cardData.thumbnail;

  return (
    <StyledTrendingCard key={index}>
      <CardContainer>
        <CardThumbnailContainer>
          <CardThumbnail src={trending.large} alt="" />
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
    </StyledTrendingCard>
  );
}

export default TrendingCard;

import { AboutUsHero } from "assets";
import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  overflow: hidden;
  .top-container {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }
`;

export const HeroWrapper = styled.div`
  background-image: url(${AboutUsHero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 60vh;

  @media (max-width: 1399.98px) {
    min-height: 100vh;
  }

  @media (max-width: 991.98px) {
    min-height: 0;
  }
`;

export const AboutUsHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  text-align: center;
  color: #fff;
  margin-bottom: 0;
`;

export const HeroSectionText = styled.p`
  width: 50%;
  color: #fff;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  font-size: 48px;
  font-weight: 600;

  span {
    color: #66fcf1;
    font-size: 24px;
  }

  @media (max-width: 991.98px) {
    width: 80%;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

import styled from "styled-components";
import { workHeroSectionImg } from "assets";
import { motion } from "framer-motion";

export const HeroWrapper = styled.div`
  background-image: url(${workHeroSectionImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 60vh;
  overflow: hidden;
  .top-container {
    margin-top: 10rem;
    margin-bottom: 10rem;
  }

  @media (max-width: 1399.98px) {
    min-height: 100vh;
  }

  @media (max-width: 991.98px) {
    min-height: 0;
  }
`;

export const HeroHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  text-align: center;
  color: #fff;
  margin-bottom: 0;
`;

export const HeroSectionText = styled(motion.p)`
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

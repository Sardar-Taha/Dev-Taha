import styled from "styled-components";
import { heroSectionImg } from "assets";
import { motion } from "framer-motion";

export const MainWrapper = styled.div`
  overflow: hidden;

  .border-div {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 4rem;
  }
`;

export const HeroSectionWrapper = styled(motion.div)`
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (max-width: 991.98px) {
    min-height: 00vh;
  }
`;

export const TextDiv = styled(motion.div)``;

export const HeroCreativeText = styled(motion.p)`
  color: #fff;
  margin-top: 6rem;
  text-transform: uppercase;

  &.no-margin {
    margin-top: 2rem;
  }

  @media (max-width: 991.98px) {
    text-align: center;
    margin-top: 6rem;
  }
`;

export const HeroHeading = styled(motion.h1)`
  font-family: "Teko" !important;
  color: #fff;
  font-size: 80px;
  font-weight: 600;

  span {
    color: #66fcf1;
    font-family: "Teko" !important;
  }

  @media (max-width: 991.98px) {
    text-align: center;
    font-size: 70px;
  }

  @media (max-width: 575.98px) {
    font-size: 50px;
  }
`;

export const HeroButton = styled.button`
  padding: 20px 30px;
  border: 2px solid #66fcf1;
  background: transparent;
  color: #fff;

  @media (max-width: 991.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MapDiv = styled.div`
  margin-top: 4rem;
`;

export const InspirationWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  img {
    width: 100%;
    margin-left: 2rem;
    margin-top: 2rem;

    @media (max-width: 991.98px) {
      margin-left: 0rem;
      margin-bottom: 2rem;
      margin-top: 0;
    }
  }

  .about-text {
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 1rem;

    @media (max-width: 991.98px) {
      text-align: center;
    }
  }
`;

export const BorderBottom = styled(motion.div)`
  width: 100px;
  border-bottom: 2px solid #66fcf1;
  margin-top: 1.5rem;

  @media (max-width: 991.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MapImgDiv = styled(motion.div)`
  position: relative;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }
`;

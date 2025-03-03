import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutMeWrapper = styled.div`
  background-color: #0b0c10;
  overflow: hidden;

  .top-container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  .card {
    height: 300px;
  }

  .icon {
    font-size: 24px;
    color: #66fcf1;

    @media (max-width: 1199.98px) {
      margin-top: 1rem;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const AboutMeCardHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  color: #fff;
  margin-bottom: 0;
  text-align: center;
  color: #66fcf1;
`;

export const AboutHeader = styled(motion.h2)`
  font-size: 62px;
  color: #fff;
  font-weight: 400;
  font-family: "Teko";
  margin-top: 2rem;

  @media (max-width: 991.98px) {
    text-align: center;
  }

  @media (max-width: 575.98px) {
    font-size: 42px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 4rem;
`;

export const DescriptionText = styled(motion.p)`
  color: #fff;
  font-size: 18px;

  @media (max-width: 575.98px) {
    font-size: 16px;
  }
`;

export const ResumeButton = styled(motion.button)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 40px;
  background-color: transparent;
  border: 2px solid #66fcf1;
  color: #fff;
  margin-top: 4rem;
`;

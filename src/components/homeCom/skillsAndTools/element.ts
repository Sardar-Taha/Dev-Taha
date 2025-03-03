import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsAndToolsContainer = styled.div`
  overflow: hidden;
  background-color: rgb(18, 18, 18);

  .container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  .main-col {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    cursor: grab;
  }

  .border-div {
    border-top: 2px solid #66fcf1;

    @media (max-width: 991.98px) {
      display: none;
    }
  }
`;

export const MainHeading = styled(motion.h1)`
  font-family: "Teko";
  color: #fff;
  font-size: 80px;
  margin-bottom: 0;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const SubText = styled(motion.p)`
  color: #66fcf1;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 991.98px) {
    justify-content: center;
  }
`;

export const FlexBorderDiv = styled.div`
  width: 5%;
  border-top: 2px solid #66fcf1;
  @media (max-width: 991.98px) {
    width: 0%;
    border: none;
  }
`;

export const IconContainer = styled.div`
  margin-top: 4rem;
`;

export const IconHolder = styled.div`
  background-color: #000;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 0.5px solid #66fcf1;

  .icon {
    color: #fff;
    font-size: 60px;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export const IconText = styled.h4`
  color: #fff;
  margin-top: 1.5rem;
`;

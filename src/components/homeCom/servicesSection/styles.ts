import styled from "styled-components";
import { Divider } from "antd";
import { motion } from "framer-motion";

export const ServicesWrapper = styled.div`
  background-color: #0b0c10;
  overflow: hidden;

  .container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .border-div {
    border-top: 2px solid #66fcf1;

    @media (max-width: 991.98px) {
      display: none;
    }
  }
`;

export const ServicesHeading = styled.h1`
  font-family: "Teko";
  color: #fff;
  font-size: 80px;
  margin-bottom: 0;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const ServicesText = styled.p`
  color: #66fcf1;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const FlexBorderDiv = styled.div`
  width: 100px;
  border-top: 2px solid #66fcf1;
  @media (max-width: 991.98px) {
    width: 0%;
    border: none;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991.98px) {
    flex-direction: column;
  }
`;

export const WorkHeading = styled(motion.h1)`
  font-family: "Teko";
  color: #fff;
  font-size: 80px;
  margin-bottom: 0;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const BorderDiv = styled.div`
  width: 50%;
  border-top: 2px solid #66fcf1;
  @media (max-width: 991.98px) {
    border: none;
  }
`;

export const WorkText = styled(motion.p)`
  color: #66fcf1;
  @media (max-width: 991.98px) {
    margin-top: 1rem;
    text-align: center;
  }
`;

export const WorkButton = styled(motion.button)`
  padding: 20px 30px;
  border: 2px solid #66fcf1;
  background: transparent;
  color: #fff;
`;

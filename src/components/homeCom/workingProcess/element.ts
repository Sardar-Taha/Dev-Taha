import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkingProcessWrapper = styled.div`
  overflow: hidden;

  .container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  .wrapper {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }

  .border-div {
    border-top: 2px solid #66fcf1;

    @media (max-width: 991.98px) {
      display: none;
    }
  }
`;

export const LeftDiv = styled(motion.div)`
  position: relative;

  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .working {
    border-radius: 10px;
    height: 470px;

    @media (max-width: 1399.98px) {
      height: 500px;
    }

    @media (max-width: 1199.98px) {
      height: 500px;
      width: 100%;
    }
  }
`;

export const WorkingLayoutDiv = styled.div`
  position: absolute;
  z-index: 10;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 991.98px) {
    br {
      display: none;
    }
  }
`;

export const WorkingProcessText = styled.h4`
  line-height: 28px;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
  margin-top: 4rem;

  @media (max-width: 575.98px) {
    margin-top: 1rem;
  }
`;

export const WorkingProcessMainText = styled.h1`
  font-family: "Teko";
  color: #fff;
`;

export const ContactUsBtn = styled.button`
  padding: 20px 30px;
  border: 2px solid #66fcf1;
  background: transparent;
  color: #fff;
  margin-top: 2rem;

  @media (max-width: 991.98px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    transform: translateX(-2rem);
  }
  @media (max-width: 575.98px) {
    transform: translateX(0rem);
  }
`;

export const RightDiv = styled.div`
  .card {
    border: none;
    background-color: transparent;

    .cardNumber {
      font-size: 50px;
      font-weight: 700;
      line-height: 1.4;
      color: rgb(102, 252, 241);
      margin: 0;

      @media (max-width: 991.98px) {
        text-align: center;
      }
    }
  }

  .card-title {
    font-size: 24px;
    line-height: 34px;
    font-weight: 600;
    color: #fff;

    @media (max-width: 991.98px) {
      text-align: center;
    }
  }

  .card-text {
    color: #fff;
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

export const ServicesHeading = styled(motion.h1)`
  font-family: "Teko";
  color: #fff;
  font-size: 80px;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const ServicesText = styled(motion.p)`
  color: #66fcf1;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

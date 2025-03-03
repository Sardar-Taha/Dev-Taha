import styled from "styled-components";
import { motion } from "framer-motion";

export const OurWorkWrapper = styled.div`
  background-color: #0b0c10;
  overflow: hidden;

  .ourContainer {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  .left {
    margin-top: 2rem;
    margin-bottom: 2rem;
    margin-left: 30px;
    @media (max-width: 991.98px) {
      margin-left: 0;
    }
  }

  .TopMargin {
    margin-top: 2rem;
  }

  .bottom-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #66fcf1;
  }
`;

export const OurWorkHeading = styled(motion.h1)`
  font-size: 80px;
  font-family: "Teko";
  text-align: center;
  color: #fff;
  margin-bottom: 0px;
`;

export const OurWorkText = styled.p`
  text-align: center;
  color: #66fcf1;
`;

export const OurWorkImg = styled.img`
  border-radius: 15px;
`;

export const OurWorkProjectHeading = styled(motion.h1)`
  font-size: 60px;
  font-family: "Teko";
  color: #fff;
  margin-bottom: 0;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;
export const OurWorkProjectText = styled(motion.p)`
  color: #fff;
  font-size: 18px;
  white-space: pre-line;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }
`;

export const TabsWrapper = styled(motion.div)`
  .ant-tabs-bottom > .ant-tabs-nav:before,
  .ant-tabs-bottom > div > .ant-tabs-nav:before,
  .ant-tabs-top > .ant-tabs-nav:before,
  .ant-tabs-top > div > .ant-tabs-nav:before {
    border-bottom: none;
  }

  .ant-tabs .ant-tabs-tab {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.5s all ease-in-out;
  }

  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-wrap {
    @media (max-width: 767.98px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list,
  .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-list {
    @media (max-width: 767.98px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .ant-tabs .ant-tabs-tab + .ant-tabs-tab {
    @media (max-width: 767.98px) {
      margin: 0;
    }
  }

  .ant-tabs .ant-tabs-tab-btn {
    padding: 10px 30px;

    @media (max-width: 767.98px) {
      padding: 10px 30px 10px 5px;
    }

    &:active {
      color: #66fcf1;
    }
  }

  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    background-color: #66fcf1;
    color: #000;
    transition: 0.5s all ease-in-out;
  }

  .ant-tabs-ink-bar {
    background: none;
  }
`;

export const WorkContentTabDiv = styled(motion.div)`
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  margin-top: 4rem;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
  }
`;

export const ImageDiv = styled(motion.div)`
  img {
    width: 100%;
    height: 750px;
    border-radius: 15px;

    @media (max-width: 991.98px) {
      height: auto;
    }
  }
`;

export const TextWrapper = styled.div`
  margin-top: 4rem;
`;

export const ProjectTextDiv = styled(motion.div)``;

export const InformationDiv = styled(motion.div)`
  background-color: #121212;
  transform: translateY(-100px);
  padding: 2rem 1rem;
  width: 220px;
  border-radius: 10px;

  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 4rem;
    transform: translateY(00px);
    margin-bottom: 2rem;
  }
`;

export const InformationText = styled(OurWorkProjectHeading)`
  font-size: 32px;
  text-align: center;
`;

export const InformationContentDiv = styled(motion.div)`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0b0c10;
  margin-top: 1rem;
  min-height: 120px;
  border-radius: 10px;

  .main-text {
    color: #fff;
    font-size: 18px;
  }

  .sub-text {
    color: #fff;
    margin: 0;
    text-transform: capitalize;
  }
`;

export const WarningDiv = styled(motion.div)`
  background-color: #1c2a2d;
  color: #ffffff;
  padding: 5px 20px;
  border: 1px solid #00cea2;
  margin-top: 1rem;
  border-radius: 5px;
  position: relative;

  .close-icon {
    color: #66fcf1;
    cursor: pointer;
    font-size: 18px;
    position: absolute;
    top: 5px;
    right: 10px;
  }
`;

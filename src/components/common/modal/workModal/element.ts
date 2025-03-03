import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalWrapper = styled.div`
  button.ant-btn.css-dev-only-do-not-override-w8mnev.ant-btn-primary {
    background: transparent;
    border: none;
    box-shadow: none;
    color: #66fcf1;
    margin-top: 2rem;
  }
  .arrow-icon {
    margin-left: 5px;
  }
`;

export const WorkModalContainer = styled(motion.div)`
  background-color: #121212;
  box-shadow: 0 0 20px 10px rgba(102, 252, 241, 0.8);
  min-height: 0 !important;
  height: 95vh !important;
  border-radius: 10px;

  @media (max-width: 991.98px) {
    height: 50vh !important;
  }

  @media (max-width: 767.98px) {
    height: 400px !important;
  }

  @media (max-width: 575.98px) {
    height: 250px !important;
  }
`;

export const SwiperWrapper = styled(motion.div)`
  height: 95vh;

  @media (max-width: 991.98px) {
    height: 50vh;
  }

  @media (max-width: 767.98px) {
    height: 400px !important;
  }

  @media (max-width: 575.98px) {
    height: 250px !important;
  }

  .swiper {
    width: 100%;
    height: 95vh;

    @media (max-width: 991.98px) {
      height: 50vh;
    }

    @media (max-width: 767.98px) {
      height: 400px !important;
    }

    @media (max-width: 575.98px) {
      height: 250px !important;
    }
  }

  .swiper-slide {
    width: 100%;
    position: relative;
  }

  .swiper-slide img {
    display: block;
    border: none;
    border-radius: 10px;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    @media (max-width: 767.98px) {
      position: static;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #66fcf1 !important;
  }

  .swiper-pagination-bullet {
    background-color: #fff;
  }

  .swiper-button-prev,
  .swiper-button-next {
    background-color: #66fcf1;
    border-radius: 1000px;
    width: 40px;
    height: 40px;
    top: 50%;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px;
    color: #fff;
    font-weight: 900;
  }
`;

export const OurWorkProjectButton = styled(motion.button)`
  color: #66fcf1;
  background: transparent;
  border: none;
  margin-top: 1rem;
  font-size: 20px;

  @media (max-width: 991.98px) {
    margin-top: 1rem;
  }
`;

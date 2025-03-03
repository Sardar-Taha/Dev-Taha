import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeHeroWrapper = styled.div`
  overflow: hidden;

  .card {
    width: 100%;
    background-color: transparent;
  }

  .card-title {
    color: #fff;
    margin-top: 1.5rem;
    font-size: 24px;
    font-family: "Teko";
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  .card-text {
    color: #fff;
  }
`;

export const BorderBottom = styled(motion.div)`
  width: 50px;
  border-bottom: 2px solid #66fcf1;
  margin-top: 1.5rem;
`;

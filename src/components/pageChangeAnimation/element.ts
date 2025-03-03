import styled from "styled-components";
import { motion } from "framer-motion";

export const PageAnimatorWrapper = styled.div`
  overflow: hidden !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: #000;
`;

export const Page = styled(motion.div)`
  background-color: #121212;
  flex: 1;
  height: 100%;
  width: 100%;
  border-top: none;
  border-bottom: none;
  border: 1px solid rgb(102, 252, 241);
  border-top: none;
  border-bottom: none;
  box-shadow: 0 0 20px rgb(102, 252, 241, 0.5);

  &.no-border {
    border-left: none !important;
  }
  &.no-right-border {
    border-right: none !important;
  }
`;

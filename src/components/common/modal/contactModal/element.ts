import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalWrapper = styled.div`
  a.nav-link {
    font-family: "Teko" !important;
    background: transparent;
    border: none;
    box-shadow: none;
    font-size: 32px;
    font-weight: 400;
    color: rgb(0, 0, 0);
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out 0s;
    margin-left: 0;
  }
`;

export const WorkModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  box-shadow: 0 0 20px 10px rgba(102, 252, 241, 0.8);
  position: relative;

  .close-icon {
    position: absolute;
    top: 10px;
    right: 20px;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s ease-in-out all;

    &:hover {
      color: #66fcf1;
      scale: 1.2;
      transition: 0.3s all ease-in-out;
    }
  }
`;

export const TextDiv = styled(motion.div)``;

export const WorkModalText = styled.p`
  text-align: center;
  color: #66fcf1;
  font-size: 24px;
`;

export const WorkModalHeading = styled.h1`
  font-family: "Teko";
  font-size: 80px;
  color: #fff;

  &:hover {
    color: #66fcf1;
  }

  @media (max-width: 767.98px) {
    font-size: 40px;
  }
`;

export const WorkModalIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .icon {
    color: #fff;
    font-size: 25px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
      color: #66fcf1;
      scale: 1.2;
      transition: 0.2s all ease-in-out;
    }
  }
`;

export const NavLink = styled(motion.h4)`
  font-family: "Teko" !important;
  font-size: 32px;
  font-weight: 400;
  color: #000;
  letter-spacing: 1px;
  transition: 0.3s ease-in-out all;
  cursor: pointer;

  @media (max-width: 991.98px) {
    font-size: 24px;
  }
`;

export const ContactUsButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 40px;
  background-color: transparent;
  border: 2px solid #66fcf1;
  color: #fff;
`;

export const ContacUsIconDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #66fcf1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

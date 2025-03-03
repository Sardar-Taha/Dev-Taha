import { useState } from "react";
import {
  ModalWrapper,
  TextDiv,
  WorkModalIcon,
  WorkModalContainer,
  WorkModalHeading,
  WorkModalText,
  NavLink,
  ContactUsButton,
  ContacUsIconDiv,
} from "./element";
import { AnimatePresence, motion } from "framer-motion";
import { Modal } from "antd";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const ContactModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  showModal,
  showBtn,
}) => {
  return (
    <ModalWrapper>
      {showBtn ? (
        <ContactUsButton onClick={showModal}>MAKE INQUIRY</ContactUsButton>
      ) : (
        <NavLink onClick={showModal}>Contact</NavLink>
      )}

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            width={"100vw"}
          >
            <WorkModalContainer
              style={{ overflow: "hidden" }}
              initial={{ scaleY: 0, minHeight: 0 }}
              animate={{ scaleY: 1, minHeight: "90vh" }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              key={"container"}
            >
              <IoCloseOutline className="close-icon" onClick={handleOk} />

              <TextDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit={{ y: 0, opacity: 0, transition: { duration: 0.4 } }}
                >
                  <WorkModalText>Contact Me:</WorkModalText>

                  <WorkModalHeading>
                    <a
                      href="mailto:dev.sardarabdul@gmail.com"
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        fontFamily: "teko",
                      }}
                    >
                      dev.sardarabdul@gmail.com
                    </a>
                  </WorkModalHeading>
                  <WorkModalIcon>
                    <a href="https://discord.com" target="_blank">
                      <ContacUsIconDiv>
                        <BsDiscord className="icon" />
                      </ContacUsIconDiv>
                    </a>
                    <a href="https://twitter.com/dev_abd_" target="_blank">
                      <ContacUsIconDiv>
                        <FiTwitter className="icon" />
                      </ContacUsIconDiv>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdullah-abbasi-296b1a277/"
                      target="_blank"
                    >
                      <ContacUsIconDiv>
                        <FaLinkedinIn className="icon" />
                      </ContacUsIconDiv>
                    </a>
                  </WorkModalIcon>
                </motion.div>
              </TextDiv>
            </WorkModalContainer>
          </Modal>
        )}
      </AnimatePresence>
    </ModalWrapper>
  );
};

export default ContactModal;

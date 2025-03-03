import {
  ContacUsIcon,
  ContacUsIconDiv,
  ContacUsWrapper,
  ContactUsHeading,
} from "./element";
import { ContactModal, MainContainer } from "components/common";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const ContacUs = () => {
  const [phoneNumber, setPhoneNumber] = useState("+923328730281");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handlePhoneNumberClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <ContacUsWrapper id="inquiry">
      <MainContainer className="contact-container" s>
        <ContacUsIconDiv>
          <ContacUsIcon>
            <AiOutlineWhatsApp
              className="icon"
              onClick={handlePhoneNumberClick}
            />

            <a href="https://discord.com" target="_blank">
              <BsDiscord className="icon" />
            </a>
            <a href="https://twitter.com/dev_abd_" target="_blank">
              <FiTwitter className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/abdullah-abbasi-296b1a277/"
              target="_blank"
            >
              <FaLinkedinIn className="icon" />
            </a>
          </ContacUsIcon>
        </ContacUsIconDiv>
        <ContactUsHeading>Have any project in mind?</ContactUsHeading>
        <ContactModal
          isModalOpen={isModalOpen}
          showModal={showModal}
          handleOk={handleOk}
          handleCancel={handleCancel}
          showBtn={showBtn}
        />
      </MainContainer>
    </ContacUsWrapper>
  );
};

export default ContacUs;

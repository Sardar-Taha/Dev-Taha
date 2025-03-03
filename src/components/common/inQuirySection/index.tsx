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
  const [phoneNumber, setPhoneNumber] = useState("+923405015414");
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
            <div className="icon-wrapper">
              <AiOutlineWhatsApp
                className="icon"
                onClick={handlePhoneNumberClick}
              />
            </div>

            <a href="https://discord.com" target="_blank">
              <div className="icon-wrapper">
                <BsDiscord className="icon" />
              </div>
            </a>
            <a href="https://x.com/its_Sardar_Taha" target="_blank">
              <div className="icon-wrapper">
                <FiTwitter className="icon" />
              </div>
            </a>

            <a href="https://linkedin.com/in/dev-taha" target="_blank">
              <div className="icon-wrapper">
                <FaLinkedinIn className="icon" />
              </div>
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

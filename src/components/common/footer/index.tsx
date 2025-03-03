import { MainCol, MainContainer, MainRow } from "components/common";
import {
  CalenderWrapper,
  EmailText,
  EmailWrapper,
  FooterBorder,
  FooterContactHeading,
  FooterCopyWrite,
  FooterFlex,
  FooterIcons,
  FooterImageDiv,
  FooterText,
  FooterWrapper,
  IconNumber,
  LocationText,
  LocationWrapper,
  ServicesHeading,
  ServicesText,
  TelephoneWrapper,
} from "./element";
import { logo, logoLottie, videoLogo } from "assets";
import { BsDiscord, BsTelephone } from "react-icons/bs";
import { GoMail, GoCalendar } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import Lottie from "react-lottie";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logoLottie,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <FooterWrapper>
      <MainContainer>
        <MainRow>
          <MainCol lg={3}>
            <FooterImageDiv>
              <Link to={"/"}>
                <Lottie options={defaultOptions} height={120} width={120} />
              </Link>
            </FooterImageDiv>
            <FooterText>
              Creating Waves in the Digital Ocean - Ride the Tide of Success.
            </FooterText>
          </MainCol>
          <MainCol lg={3}>
            <FooterContactHeading>Contact Me</FooterContactHeading>
            <TelephoneWrapper>
              <BsTelephone className="margin" />
              <IconNumber>+92 340 5015 414</IconNumber>
            </TelephoneWrapper>
            <EmailWrapper>
              <GoMail className="Mail" />
              <EmailText>dev.sardartaha@gmail.com</EmailText>
            </EmailWrapper>
            <LocationWrapper>
              <AiOutlineWhatsApp className="Mail" />
              <LocationText>+92 340 5015 414</LocationText>
            </LocationWrapper>
            <CalenderWrapper>
              <BsDiscord className="Mail" />
              <CalenderWrapper>Taha Abbasi#9399</CalenderWrapper>
            </CalenderWrapper>
          </MainCol>
          <MainCol lg={3}>
            <ServicesHeading>Sections</ServicesHeading>

            {location.pathname === "/" ? (
              <>
                <ServicesText onClick={() => scrollToSection("hero")}>
                  Hero
                </ServicesText>

                <ServicesText onClick={() => scrollToSection("work")}>
                  Work
                </ServicesText>
                <ServicesText onClick={() => scrollToSection("services")}>
                  Services
                </ServicesText>
                <ServicesText onClick={() => scrollToSection("skills")}>
                  Skills & Tools
                </ServicesText>
              </>
            ) : (
              <ServicesText className="no-hover">
                Please Go to Home Page First For Section Navigation.
              </ServicesText>
            )}
          </MainCol>

          <MainCol lg={3}>
            <ServicesHeading>Links</ServicesHeading>
            <Link to="/">
              <ServicesText>Home</ServicesText>
            </Link>
            <Link to="/about">
              <ServicesText>About</ServicesText>
            </Link>
            <Link to="/work">
              <ServicesText>Work</ServicesText>
            </Link>
            <ServicesText>Contact</ServicesText>
          </MainCol>
        </MainRow>
      </MainContainer>
      <FooterBorder />

      <MainContainer className="footer-container">
        <FooterFlex>
          <FooterCopyWrite>
            Copyright © {currentYear} All rights reserved
          </FooterCopyWrite>
          <FooterIcons>
            <a href="https://discord.com" target="_blank">
              <BsDiscord className="icon" />
            </a>
            <a href="https://x.com/its_Sardar_Taha" target="_blank">
              <FiTwitter className="icon" />
            </a>

            <a href="https://linkedin.com/in/dev-taha/" target="_blank">
              <FaLinkedinIn className="icon" />
            </a>
          </FooterIcons>
        </FooterFlex>
      </MainContainer>
    </FooterWrapper>
  );
}

export default Footer;

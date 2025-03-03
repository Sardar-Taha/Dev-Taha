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
import { logo, videoLogo } from "assets";
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

  return (
    <FooterWrapper>
      <MainContainer>
        <MainRow>
          <MainCol lg={3}>
            <FooterImageDiv>
              <img className="img-fluid logo" src={videoLogo} />
            </FooterImageDiv>
            <FooterText>
              Creating Waves in the Digital Ocean - Ride the Tide of Success.
            </FooterText>
          </MainCol>
          <MainCol lg={3}>
            <FooterContactHeading>Contact Me</FooterContactHeading>
            <TelephoneWrapper>
              <BsTelephone className="margin" />
              <IconNumber>+92 332 8730 281</IconNumber>
            </TelephoneWrapper>
            <EmailWrapper>
              <GoMail className="Mail" />
              <EmailText>dev.sardarabdul@gmail.com</EmailText>
            </EmailWrapper>
            <LocationWrapper>
              <AiOutlineWhatsApp className="Mail" />
              <LocationText>+92 332 8730 281</LocationText>
            </LocationWrapper>
            <CalenderWrapper>
              <BsDiscord className="Mail" />
              <CalenderWrapper>Abdullah Abbasi#2665</CalenderWrapper>
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
            <a href="https://twitter.com/dev_abd_" target="_blank">
              <FiTwitter className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/abdullah-abbasi-296b1a277/"
              target="_blank"
            >
              <FaLinkedinIn className="icon" />
            </a>
          </FooterIcons>
        </FooterFlex>
      </MainContainer>
    </FooterWrapper>
  );
}

export default Footer;

import { MainCol, MainContainer, MainRow, Navbar } from "components/common";
import {
  HeroSectionHeading,
  HeroSectionText,
  HeroSectionWrapper,
  ServicesBg,
  ServicesHeading,
  ServicesText,
  ServicesWorkButton,
  ServicesWorkHeading,
  ServicesWorkSection,
  ServicesWrapper,
} from "./element";
import { Link } from "react-router-dom";
import { servicesCardData } from "components/data";
import ServicesCard from "components/common/card/servicesCard";

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <ServicesBg>
        <Navbar />
        <MainContainer className="top-container">
          <HeroSectionHeading>Services.</HeroSectionHeading>
          <HeroSectionText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            deserunt vitae! Expedita illum ducimus natus similique sit dolorum
            provident ullam. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. A, architecto?
          </HeroSectionText>
        </MainContainer>
      </ServicesBg>
      <ServicesWrapper>
        <MainContainer className="services-container">
          <ServicesHeading>Services. </ServicesHeading>
          <ServicesText>OUR SERVICES FOR CLIENTS</ServicesText>

          <MainRow>
            {servicesCardData.map((item, index) => (
              <MainCol lg={4}>
                <ServicesCard item={item} index={index} />
              </MainCol>
            ))}
          </MainRow>
        </MainContainer>
      </ServicesWrapper>
      <ServicesWorkSection>
        <MainContainer className="serviceswork-container">
          <ServicesWorkHeading>Wanna see our works?</ServicesWorkHeading>
          <Link to="/work">
            <ServicesWorkButton>ALL PROJECTS</ServicesWorkButton>
          </Link>
        </MainContainer>
      </ServicesWorkSection>
    </HeroSectionWrapper>
  );
};

export default HeroSection;

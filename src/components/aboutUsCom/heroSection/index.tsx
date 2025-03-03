import { MainContainer, Navbar } from "components/common";
import {
  AboutUsHeading,
  AboutUsWrapper,
  HeroSectionText,
  HeroWrapper,
} from "./element";

const HeroSection = () => {
  return (
    <AboutUsWrapper>
      <HeroWrapper>
        <Navbar />
        <MainContainer className="top-container">
          {/* <AboutUsHeading>About us.</AboutUsHeading> */}
          <HeroSectionText>
            ❝ Getting a quality software is not an expense but rather an
            investment.❞ <br /> <span> ― Dr. Christopher Dayagdag</span>
          </HeroSectionText>
        </MainContainer>
      </HeroWrapper>
    </AboutUsWrapper>
  );
};

export default HeroSection;

import { MainContainer, Navbar } from "components/common";
import { HeroHeading, HeroSectionText, HeroWrapper } from "./element";

function HeroSection() {
  return (
    <HeroWrapper>
      <Navbar />
      <MainContainer className="top-container">
        {/* <HeroHeading>Our Works.</HeroHeading> */}
        <HeroSectionText>
          ❝ Your work is your best marketing strategy.❞ <br />{" "}
          <span> - Jason Fried</span>
        </HeroSectionText>
      </MainContainer>
    </HeroWrapper>
  );
}

export default HeroSection;

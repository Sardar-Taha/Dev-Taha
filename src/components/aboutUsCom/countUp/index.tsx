import { CountUpWrapper, IconText, IconWrapper } from "./element";
import { MainCol, MainContainer, MainRow } from "components/common";
import { RiContactsLine } from "react-icons/ri";
import CountUpComponent from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { AiOutlineSetting, AiOutlineCalendar } from "react-icons/ai";

const CountUp = () => {
  return (
    <CountUpWrapper>
      <MainContainer className="top-container">
        <MainRow>
          <MainCol lg={4}>
            <IconWrapper>
              <RiContactsLine className="IconContact" />

              <div>
                <div className="flex">
                  <CountUpComponent end={150} duration={2} useEasing={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="Icon-heading" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUpComponent>
                  <span className="Icon-heading">+</span>
                </div>
                <IconText>Happy Clients</IconText>
              </div>
            </IconWrapper>
          </MainCol>
          <MainCol lg={4}>
            <IconWrapper>
              <AiOutlineSetting className="IconContact" />
              <div>
                <div className="flex">
                  <CountUpComponent end={50} duration={2} useEasing={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="Icon-heading" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUpComponent>
                  <span className="Icon-heading">+</span>
                </div>
                <IconText>Project Completed</IconText>
              </div>
            </IconWrapper>
          </MainCol>
          <MainCol lg={4}>
            <IconWrapper>
              <AiOutlineCalendar className="IconContact" />
              <div>
                <div className="flex">
                  <CountUpComponent end={3} duration={5} useEasing={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="Icon-heading" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUpComponent>
                  <span className="Icon-heading">+</span>
                </div>
                <IconText>Years of Experience</IconText>
              </div>
            </IconWrapper>
          </MainCol>
        </MainRow>
      </MainContainer>
    </CountUpWrapper>
  );
};

export default CountUp;

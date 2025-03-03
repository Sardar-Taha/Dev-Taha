import { ExperienceData } from "components/data";
import {
  EducationFlex,
  EducationFlexLeft,
  EducationFlexRight,
  EducationLeftText,
  EducationRightHeading,
  EducationRightSubHeading,
  EducationRightText,
  EducationWrapper,
} from "./element";

const ButtonExperience = () => {
  return (
    <EducationWrapper>
      {ExperienceData.map((item, index) => (
        <>
          <EducationFlex key={item.id}>
            <EducationFlexLeft className={index === 0 && "border-none"}>
              <EducationLeftText>{item.date}</EducationLeftText>
            </EducationFlexLeft>
            <EducationFlexRight>
              <EducationRightHeading>{item.heading} </EducationRightHeading>
              <EducationRightSubHeading>
                {item.subHeading}
              </EducationRightSubHeading>
              <EducationRightText>{item.text} </EducationRightText>
            </EducationFlexRight>
          </EducationFlex>
        </>
      ))}
    </EducationWrapper>
  );
};

export default ButtonExperience;

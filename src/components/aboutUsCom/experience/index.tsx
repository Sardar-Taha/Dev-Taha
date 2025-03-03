import { MainContainer } from "components/common";
import {
  ButtonWrapper,
  EducationButton,
  ExperienceButton,
  ExperienceWrapper,
} from "./element";
import { useState } from "react";
import Education from "./education";
import ButtonExperience from "./experience";

const Experience = () => {
  const [education, setEducation] = useState(true);

  return (
    <ExperienceWrapper>
      <MainContainer className="wrapper-margin">
        <ButtonWrapper>
          <EducationButton
            onClick={() => setEducation(true)}
            className={education && "education-active"}
          >
            Education
          </EducationButton>
          <ExperienceButton
            onClick={() => setEducation(false)}
            className={!education && "experience-active"}
          >
            Experience
          </ExperienceButton>
        </ButtonWrapper>
        {education ? (
          <div>
            <Education />
          </div>
        ) : (
          <div>
            <ButtonExperience />
          </div>
        )}
      </MainContainer>
    </ExperienceWrapper>
  );
};

export default Experience;

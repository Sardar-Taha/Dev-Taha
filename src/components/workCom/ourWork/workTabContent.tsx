import { Image } from "react-bootstrap";
import {
  ContentWrapper,
  ImageDiv,
  InformationContentDiv,
  InformationDiv,
  InformationText,
  OurWorkProjectHeading,
  OurWorkProjectText,
  ProjectTextDiv,
  TextWrapper,
  WarningDiv,
  WorkContentTabDiv,
} from "./element";
import { OurWorkImgOne } from "assets";
import { MainCol, MainRow, WorkModal } from "components/common";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

function WorkTabContent({ filteredData }) {
  return (
    <WorkContentTabDiv>
      {filteredData.map((item) => (
        <ContentWrapper>
          <ImageDiv
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            <Image fluid src={item.mainImage} />
          </ImageDiv>
          <TextWrapper>
            <MainRow>
              <MainCol lg={9}>
                <ProjectTextDiv>
                  <OurWorkProjectHeading
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.5 }}
                  >
                    {item?.title}
                  </OurWorkProjectHeading>
                  <OurWorkProjectText
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.75 }}
                  >
                    {item.description}
                  </OurWorkProjectText>

                  {item.link && (
                    <OurWorkProjectText
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.75, delay: 1 }}
                    >
                      Project Link:
                      <a href={item.link} target="_blank">
                        {""} {item.link}
                      </a>
                    </OurWorkProjectText>
                  )}

                  <WorkModal item={item} />
                </ProjectTextDiv>
              </MainCol>
              <MainCol lg={3} className="bottom-col">
                <InformationDiv
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <InformationText
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.25 }}
                  >
                    Details
                  </InformationText>
                  <InformationContentDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.35 }}
                  >
                    <h4 className="main-text"> Project Name:</h4>
                    <p className="sub-text"> {item.title}</p>
                  </InformationContentDiv>
                  <InformationContentDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.45 }}
                  >
                    <h4 className="main-text"> Category:</h4>
                    <p className="sub-text"> {item.category}</p>
                  </InformationContentDiv>
                  <InformationContentDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.55 }}
                  >
                    <h4 className="main-text"> Duration:</h4>
                    <p className="sub-text"> {item.duration}</p>
                  </InformationContentDiv>
                  <InformationContentDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.65 }}
                  >
                    <h4 className="main-text"> Date:</h4>
                    <p className="sub-text"> {item.date}</p>
                  </InformationContentDiv>
                </InformationDiv>
              </MainCol>
            </MainRow>
          </TextWrapper>
        </ContentWrapper>
      ))}
    </WorkContentTabDiv>
  );
}

export default WorkTabContent;

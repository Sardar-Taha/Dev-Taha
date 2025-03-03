import styled from "styled-components";

export const EducationWrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;

  @media (max-width: 991.98px) {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
`;

export const EducationFlex = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 20px;
  }

  .border-none {
  }
`;

export const EducationFlexLeft = styled.div`
  border-top: 1px solid #66fcf1;
  border-right: 1px solid #66fcf1;
  border-left: 1px solid #66fcf1;
  border-bottom: 1px solid #66fcf1;
  flex: 1;
  padding: 125px 30px 125px 170px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    height: 50px;
    width: 2px;
    top: 50%;
    right: -1px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background: #fff;
  }

  @media (max-width: 991.98px) {
    padding: 25px;
    justify-content: flex-start;
  }
`;

export const EducationLeftText = styled.p`
  color: #fff;
  font-size: 18px;
  margin: 0;
`;

export const EducationFlexRight = styled.div`
  flex: 4;
`;

export const EducationRightHeading = styled.h1`
  font-family: "Teko";
  font-size: 80px;
  color: #fff;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const EducationRightSubHeading = styled.p`
  color: #fff;
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const EducationRightText = styled.p`
  color: #66fcf1;

  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

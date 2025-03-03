import styled from "styled-components";

export const HeroCardWrapper = styled.div`
  margin-top: 5rem;
  padding: 50px 15px 50px 40px;
  background: #121212;
  color: #fff;
  margin-bottom: 3rem;
  border: 4px solid transparent;
  transition: 0.2s all ease-in-out;

  &:hover {
    border: 4px solid #66fcf1;
  }

  @media (max-width: 991.98px) {
    margin-top: 0;
    &.margin-class {
      margin-top: 5rem;
    }
  }
`;

export const HeroCardIcon = styled.div`
  font-size: 42px;
  color: #66fcf1;
  @media (max-width: 575.98px) {
    text-align: center;
  }
`;

export const HeroCardHeading = styled.h1`
  font-family: "Teko";
  margin-top: 2rem;
  @media (max-width: 575.98px) {
    text-align: center;
  }
`;

export const HeroCardText = styled.p`
  @media (max-width: 575.98px) {
    text-align: center;
  }
`;

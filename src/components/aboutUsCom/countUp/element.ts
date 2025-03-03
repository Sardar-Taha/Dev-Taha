import styled from "styled-components";

export const CountUpWrapper = styled.div`
  background-color: #121212;
  overflow: hidden;

  .top-container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 991.98px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .IconContact {
    font-size: 80px;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid #40424d;
    color: #66fcf1;
  }

  .Icon-heading {
    font-family: "Teko";
    font-size: 56px;
    color: #fff;
    margin-bottom: 0;
    @media (max-width: 991.98px) {
    }
  }

  .flex {
    @media (max-width: 991.98px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const IconHeading = styled.h1`
  font-family: "Teko";
  font-size: 56px;
  color: #fff;
  margin-bottom: 0;
  @media (max-width: 991.98px) {
  }
`;

export const IconText = styled.p`
  color: #66fcf1;
`;

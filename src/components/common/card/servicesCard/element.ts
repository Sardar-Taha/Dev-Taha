import styled from "styled-components";

export const ServicesCardWrapper = styled.div`
  .card {
    margin-top: 2rem;
    border: none;
    border-radius: 0px;
    border-bottom: 4px solid #fff;
    min-height: 330px;

    &:hover {
      border-bottom: 4px solid #66fcf1;
    }
  }

  .card-body {
    padding: 45px;
    background-color: #121212;
    color: #fff;
    @media (max-width: 575.98px) {
      text-align: center;
    }
  }

  .margin-top {
    margin-top: 5rem;

    @media (max-width: 991.98px) {
      margin-top: 2rem;
    }
  }

  .card-title {
    font-family: "Teko";
    font-size: 40px;
    margin-top: 1rem;
  }
`;

export const ServicesCardIcon = styled.div`
  font-size: 42px;
  color: #66fcf1;
`;

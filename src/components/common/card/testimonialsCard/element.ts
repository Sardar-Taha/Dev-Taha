import styled from "styled-components";

export const TestimonialsCardWrapper = styled.div`
  overflow: hidden;
`;

export const CardContainer = styled.div`
  margin-bottom: 5rem;
  position: relative;

  .card {
    width: 100%;
    min-height: 320px;
    background-color: #121212;
    border: 1px solid rgb(255, 255, 255, 0.3);
    border-bottom: none;
    filter: drop-shadow(0 0 0.35rem #66fcf1);
    padding: 1rem 2rem 1rem;

    @media (max-width: 575.98px) {
      padding: 1rem 10px;
      min-height: 340px;
    }
  }

  .icon {
    color: #fff;
    display: block;
    margin: 0rem auto 1rem;
    font-size: 24px;
  }
`;

export const QuoteText = styled.p`
  color: #fff;
  text-align: center;
`;

export const StarsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 2rem;

  .star-icon {
    color: #fec42d;
    font-size: 24px;
  }
`;

export const ImageDiv = styled.div`
  position: absolute;
  bottom: -70px;
  left: 45%;
  z-index: 10;

  @media (max-width: 575.98px) {
    left: 40%;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 1000px;
    background-color: #fff;
  }

  .female-user {
    padding: 10px;
  }

  .user-name {
    color: #fff;
    margin: 0;
    margin-top: 10px;
    text-align: center;
    transform: translateX(-10px);
  }
`;

import styled from "styled-components";

export const FooterWrapper = styled.div`
  overflow: hidden;
  background: #121212;
  backdrop-filter: blur(126.5px);
  border-top: 2px solid #66fcf1;

  a {
    text-decoration: none;
  }

  .logo {
    height: 100px;
  }

  .container {
    margin-top: 4rem;
    margin-bottom: 2rem;

    @media (max-width: 991.98px) {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .topIcon {
    font-size: 2rem;
    margin-top: 10px;
    cursor: pointer;
    color: rgb(255, 212, 82);

    &:hover {
      animation-name: heartBeat;
      animation-duration: 1s;
    }
  }

  .footer-container {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const FooterImageDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  .brandText {
    font-style: normal;
    font-weight: 700;
    font-size: 19.9783px;
    line-height: 30px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0 !important;
    cursor: pointer;
  }

  .img-fluid {
    cursor: pointer;
  }

  @media (max-width: 991.98px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;

export const FooterText = styled.p`
  margin-top: 2rem;
  color: #fff;
  width: 70%;

  @media (max-width: 991.98px) {
    margin-top: 2rem;
    width: 100%;

    text-align: center;
  }
`;

export const FooterContactHeading = styled.h1`
  font-family: "Teko" !important;
  font-size: 28px;
  color: #fff;
  @media (max-width: 991.98px) {
    margin-top: 2rem;
    text-align: center;
  }
`;

export const TelephoneWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: #fff;

  .margin {
    margin-top: 3px;
    color: #66fcf1;
  }
  @media (max-width: 991.98px) {
    justify-content: center;
  }
`;

export const IconNumber = styled.p``;

export const EmailWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: #fff;
  .Mail {
    margin-top: 3px;
    color: #66fcf1;
    font-size: 20px;
  }
  @media (max-width: 991.98px) {
    justify-content: center;
  }
`;

export const EmailText = styled.p``;

export const LocationWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: #fff;
  .Mail {
    margin-top: 3px;
    color: #66fcf1;
    font-size: 20px;
  }
  @media (max-width: 991.98px) {
    justify-content: center;
  }
`;

export const LocationText = styled.p``;

export const CalenderWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: #fff;
  .Mail {
    margin-top: 3px;
    color: #66fcf1;
    font-size: 20px;
  }
  @media (max-width: 991.98px) {
    justify-content: center;
  }
`;

export const CalenderText = styled.p``;

export const ServicesHeading = styled.h1`
  font-family: "Teko" !important;
  font-size: 28px;
  color: #fff;
  @media (max-width: 991.98px) {
    margin-top: 2rem;
    text-align: center;
  }
`;

export const ServicesText = styled.p`
  color: #fff;
  transition: 0.3s ease-in-out all;
  cursor: pointer;

  &.no-hover {
    &:hover {
      scale: 1;
      color: #fff;
      cursor: auto;
    }
  }

  &:hover {
    scale: 1.2;
    color: #66fcf1;
    transition: 0.3s ease-in-out all;
  }
  @media (max-width: 991.98px) {
    text-align: center;
  }
`;

export const FooterBorder = styled.div`
  border-bottom: 1px solid #262626;
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #fff;
  }

  @media (max-width: 767.98px) {
    flex-direction: column;
  }
`;

export const FooterCopyWrite = styled.p`
  color: #fff;
`;

export const FooterIcons = styled.p`
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  .icon {
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;

    &:hover {
      color: #66fcf1;
      scale: 1.2;
    }
  }
`;

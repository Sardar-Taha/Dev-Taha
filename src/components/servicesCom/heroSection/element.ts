import styled from "styled-components";
import { servicesBg, sericesWorkImg } from "assets";

export const HeroSectionWrapper = styled.div`
  a {
    text-decoration: none;
  }
  overflow: hidden;

  .top-container {
    margin-top: 10rem;
    margin-bottom: 10rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;

export const ServicesBg = styled.div`
  background-image: url(${servicesBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 60vh;
  overflow: hidden;

  @media (max-width: 1399.98px) {
    min-height: 100vh;
  }

  @media (max-width: 991.98px) {
    min-height: 0;
  }
`;

export const HeroSectionHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  color: #fff;
  text-align: center;
  margin-bottom: 0;
`;

export const HeroSectionText = styled.p`
  width: 50%;
  color: #66fcf1;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 991.98px) {
    width: 80%;
  }

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

export const ServicesWrapper = styled.div`
  overflow: hidden;
  background: #0b0c10;

  .services-container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;

export const ServicesHeading = styled.h1`
  font-size: 80px;
  font-family: "Teko";
  color: #fff;
  text-align: center;
  margin-bottom: 0;
`;

export const ServicesText = styled.p`
  color: #66fcf1;
  text-align: center;
`;

export const ServicesWorkSection = styled.div`
  background-image: url(${sericesWorkImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;

  .serviceswork-container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
`;

export const ServicesWorkHeading = styled.h1`
  text-align: center;
  font-size: 80px;
  font-family: "Teko";
  color: #fff;
`;

export const ServicesWorkButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  color: #fff;
  padding: 20px 40px;
  border: 2px solid #66fcf1;
`;

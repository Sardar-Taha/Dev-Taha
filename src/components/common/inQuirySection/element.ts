import styled from "styled-components";
import { contactUsBg } from "assets";

export const ContacUsWrapper = styled.div`
  background-image: url(${contactUsBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;

  .contact-container {
    margin-top: 8rem;
    margin-bottom: 8rem;

    @media (max-width: 991.98px) {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }

  a {
    color: #fff;
  }
`;

export const ContacUsIconDiv = styled.div`
  text-align: center;
  .icon {
    margin-right: 20px;
    border: 2px solid #66fcf1;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      color: #66fcf1;
    }
  }
`;

export const ContacUsIcon = styled.p`
  font-size: 50px;
  color: #fff;
`;

export const ContactUsHeading = styled.h1`
  font-family: "Teko" !important;
  font-size: 70px;
  text-align: center;
  color: #fff;

  @media (max-width: 767.98px) {
    font-size: 50px;
  }
`;

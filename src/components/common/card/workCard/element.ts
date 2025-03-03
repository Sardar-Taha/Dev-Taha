import styled from "styled-components";

export const WorkFlex = styled.div`
  margin-top: 2rem;
  position: relative;
  cursor: pointer;

  img {
    height: 350px;
    width: 100%;
    transition: all 0.3s;
    border-radius: 10px;

    @media (max-width: 991.98px) {
      height: 350px;
      width: 400px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 575.98px) {
      width: 350px;
    }

    @media (max-width: 351px) {
      width: 300px;
    }

    &:hover {
      transform: scale(1.25, 1.23);
      transition: all 0.3s;
    }
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgb(102, 252, 241, 0.1);
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  ${WorkFlex}:hover & {
    visibility: visible;
  }

  p {
    font-size: 24px;
    font-weight: 600;
    color: #fff;
  }
`;

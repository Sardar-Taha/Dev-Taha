import styled, { css } from "styled-components";

export const NoDataFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  .noData {
    display: block;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  margin-top: 1rem;
  color: #ffffff;
  margin-left: 1.5rem;
`;

import styled from "styled-components";

export const NoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: #090c02;
  padding: 64px 84px;
  min-height: calc(100vh - 198px);
  justify-content: center;
  align-items: center;

  & p {
    font-size: 28px;
  }

  & p,
  a {
    color: #e6eed6;
  }
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: center;
  gap: 32px;
  margin: 0 auto;

  @media (max-width: 1050px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  height: 600px;
  width: 50%;

  @media (max-width: 1050px) {
    width: 100%;
  }
`;

export const Box = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: #090c02;
  padding: 64px 84px;
  color: #e6eed6;
  min-height: calc(100vh - 198px);
`;

export const Wrapper = styled.div`
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 32px;
  margin: 0 auto;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Text = styled.p`
  font-weight: bold;
  font-size: 28px;
`;

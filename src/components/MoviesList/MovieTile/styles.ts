import styled from "styled-components";

export const Tile = styled.div`
  & p {
    margin-bottom: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
    width: 280px;

    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }

  & img {
    width: 300px;
    height: 500px;
    object-fit: cover;
    cursor: pointer;

    @media (max-width: 1050px) {
      width: 100%;
    }
  }
`;

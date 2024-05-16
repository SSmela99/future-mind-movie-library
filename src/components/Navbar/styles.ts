import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #090c02;
  border-bottom: 3px solid #a72608;
  color: #e6eed6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Logo = styled.h1`
  cursor: pointer;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const Item = styled.div<{ $path: string | undefined }>`
  position: relative;
  cursor: ${(props) => (props.$path ? "pointer" : "cursor")};

  &:after {
    content: "";
    position: absolute;
    width: 100px;
    left: 0;
    top: 0;
    height: 32px;
  }

  &:hover {
    div {
      display: flex;
    }
  }
`;

export const ItemMenu = styled.div`
  position: absolute;
  width: 100px;
  height: fit-content;
  display: none;
  overflow: hidden;
  background-color: #a72608;
  flex-direction: column;
  gap: 8px;
  padding: 12px 8px;
  top: 32px;

  & p {
    font-size: 14px;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }
  }
`;

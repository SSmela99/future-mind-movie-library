import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 0;
  background-color: #fff;
  border-bottom: 3px solid #a72608;

  & .react-datepicker-wrapper,
  & .react-datepicker-wrapper input {
    @media (max-width: 680px) {
      width: 100% !important;
    }
  }

  & .react-datepicker__input-container input {
    width: 50px;
    height: 38px;
    padding: 8px;
    border: 1px solid hsl(0, 0%, 80%);
    border-radius: 4px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 24px;
  padding: 0 24px;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
    }
  }
`;

export const InputWrapper = styled.div`
  width: unset;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 4px;
  height: 38px;

  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
`;

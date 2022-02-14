import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  border: none;

  .input {
    width: 100%;
    margin-top: 0.8rem;
    background: #f8f8f8;
    border: none;
    border-radius: 0.5rem;
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
    padding: 1.2rem;

    &:focus-visible {
      outline: none;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 0.8rem;
  background: #f8f8f8;
  border: none;
  border-radius: 0.5rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1.2rem;

  &:focus-visible {
    outline: none;
  }
`;

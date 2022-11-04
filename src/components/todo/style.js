import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 20px;
  background: gray;
  // border-radius: 8px;
  padding: 20px;
  height: 1400px;
`;

export const Flexcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  outline: none;
  border-radius: 8px;
  background: grey;
  color: white;
  font-size: 18px;
  ::placeholder {
    color: black;
    font-size: 18px;
  }
  border: 1px solid black;

`;

export const ButtonContainer = styled.button`
  margin: 10px 0px;
  padding: 20px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  background: black;
  color: white;
  &:hover {
    color: black;
    background: white;
  }
`;
export const Edit = styled.div`
  color: black;
 font-size: 18px;
 padding: 18px;
 font-weight: 500;

`;

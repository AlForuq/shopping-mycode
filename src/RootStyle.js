import styled from "styled-components";
import { GoPlus as plus } from "react-icons/go";
import { FaGreaterThan as arrow } from "react-icons/fa";

export const Container = styled.div`
  background-color: #bee3ff;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
`;

export const Wrapper = styled.div`
  max-width: 300px;
  min-width: 500px;
  box-shadow: 10px 5px 8px rgba(236, 100, 91, 0.7);
  border-radius: 10px;
  background-color: #ec645b;
  padding: 45px 15px 25px 15px;
  gap: 300px;
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;
  outline: none;
  border: none;
  font-size: 18px;
  background-color: inherit;
`;
Input.Wrapper = styled.form`
  box-sizing: border-box;
  background-color: #fbc1bb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;
export const Button = styled(plus)`
  font-size: 35px;
  color: #ec645b;
  :hover {
    color: #8b0000;
    cursor: pointer;
    transform: scale(1.2);
  }
  :active {
    color: #8b0000;
    cursor: pointer;
    transform: scale(0.95);
  }
`;

export const List = styled.div`
margin-top: 30px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid white;
  padding: 10px;
`;

export const Check = styled.input`
  width: 23px;
  height: 23px;
  :hover{
    cursor: pointer;
  }

`;

export const Title = styled.div`
  font-size: 30px;
  color: white;
  font-family: sans-serif;
  
`;

Title.LineThrough = styled(Title)`
  text-decoration: line-through;
`;

Title.Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 5px;
`;

export const Span = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  background-color: white;
  border-radius: 30px;
  padding: 0 8px;
`;

export const Number = styled.div`
  font-size: 35px;
  color: #ec645b;
`;

export const Icon = styled.div``;

Icon.Right = styled(arrow)`
  color: #ec645b;
  font-size: 30px;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  :active {
    color: #8b0000;
    cursor: pointer;
    transform: scale(0.95);
  }
`;

Icon.Left = styled(Icon.Right)`
  transform: rotate(180deg);
  :hover {
    transform: scale(1.2) rotate(180deg);
  }
  :active {
    transform: scale(0.95) rotate(180deg);
  }
`;


export const Total = styled.div` 
margin-top: 10px;
padding-right:10px ;
display: flex;
justify-content: flex-end;
`
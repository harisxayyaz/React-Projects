import styled from "styled-components";

const Button = ({ color, text, isSpecial }) => {
  return (
    <ButtonComponent color={color} isSpecial={isSpecial}>
      {text}
    </ButtonComponent>
  );
};

const ButtonComponent = styled.button`
  height: 40px;
  padding: 10px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: ${(props) => (props.isSpecial ? "5px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.isSpecial ? "5px" : "0px")};
  color: white;
  border: none;
  margin-right: 2px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "darkblue" ? "#1E1F4A" : "#12a89e"};
`;

export default Button;

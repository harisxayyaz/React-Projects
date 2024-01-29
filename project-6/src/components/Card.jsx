import styled from "styled-components";
import Button from "./Button";

const Card = ({ title, text, path }) => {
  return (
    <CardComponent>
      <h3>{title}</h3>
      <img src={path} alt="youtube" />
      <p>{text}</p>
      <Button color={"darkblue"} text={"Learn More"} isSpecial={true} />
    </CardComponent>
  );
};

const CardComponent = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 303px;
  width: 227px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    height: 195px;
    width: 100%;
  }

  p {
    color: gray;
  }

  Button {
    width: 82px;
    height: 28px;
    font-weight: 100;
    font-size: 10px;
  }
`;

export default Card;

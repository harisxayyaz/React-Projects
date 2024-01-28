import styled from "styled-components";
import { BASE_URL, Button } from "../../App";

const SearchResult = ({ data: foods }) => {
  return (
    <FoodContainer>
      <FoodCards>
        {foods?.map((food) => (
          <FoodCard key={food.name}>
            <div className="food_image">
              <img src={BASE_URL + food.image} alt="" />
            </div>

            <div className="food_info">
              <div className="food_text">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
              </div>

              <Button>{food.price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodContainer>
  );
};

const FoodContainer = styled.section`
  background-image: url("./background.png");
  background-size: cover;
  min-height: calc(100vh - 210px);
  display: flex;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 340px;
  height: 167px;
  border-radius: 19.447px;
  border: 0.659px solid #98f9ff;

  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );

  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);

  display: flex;
  padding: 8px;

  .food_info {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    padding: 10px;

    p {
      font-size: 12px;
    }
  }
`;

export default SearchResult;

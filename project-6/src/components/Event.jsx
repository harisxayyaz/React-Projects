import styled from "styled-components";

const Event = ({ h2Text, p1, h4 }) => {
  return (
    <EventComponent>
      <WhiteArea>
        <h2>{h2Text}</h2>
        <p>{p1}</p>
      </WhiteArea>
      <div className="text">
        <h4>{h4}</h4>

        <p>Read More</p>
      </div>
    </EventComponent>
  );
};

const EventComponent = styled.div`
  display: flex;
  color: white;
  gap: 8px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .text p {
    color: #428bca;
    cursor: pointer;
  }
`;

const WhiteArea = styled.div`
  background-color: white;
  min-width: 90px;
  height: 90px;
  color: #13a89e;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default Event;

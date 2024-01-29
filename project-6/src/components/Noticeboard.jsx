import styled from "styled-components";

const Noticeboard = () => {
  const noticeBoardTexts = [
    { key: "1", text: "Abdullah Foundation Scholarship Program" },
    { key: "2", text: "Study in the Kingdom of Saudi Arabia" },
    {
      key: "3",
      text: "NUST OLYMPIAD 24, The NUST Olympiad  Ambassadorship Program presents a remarkable opportunity for students to partake in significant sporting events, engage with eminent intellectuals nationwide, and gain comprehensive exposure to university life. This experience ensures the cultivation of a confident attitude, poised to significantly contribute to their future endeavors while affording them a memorable and enriching period in their lives. Don't miss this amazing opportunity to become a part of something bigger.",
    },
    {
      key: "4",
      text: "Student Online Complaint System Submit your complaint now! for further details Click here",
    },
    {
      key: "5",
      text: "The students selected for PM Laptop scheme have been informed to the respective Coordinators of departments. The laptops will be distributed on 7th and 8th December 2023. For detailed distribution schedule of your department and list of required documents to bring along, Please contact your respective department coordinator.",
    },
  ];

  return (
    <NoticeboardComponent>
      <img src="./images/NoticeBoardtitle.png" alt="" />
      <NoticeContent>
        {noticeBoardTexts.map((element) => (
          <Paragraph key={element.key}>{element.text}</Paragraph>
        ))}
      </NoticeContent>
    </NoticeboardComponent>
  );
};

const NoticeboardComponent = styled.div`
  max-width: 65.5%;
  height: 300px;
  background-image: url("./images/chalkboard.png");
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 15px solid #efefef;
  border-radius: 5px;
  padding: 15px;
  margin-right: 15px;
  overflow-y: auto;
`;

const NoticeContent = styled.div`
  text-align: left;
  width: 100%;

  p {
    color: yellow;
    font-weight: 600;
    line-height: 20px;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
  border-bottom: 2px solid yellow;
  padding-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #c0c02b;
  }
`;

export default Noticeboard;

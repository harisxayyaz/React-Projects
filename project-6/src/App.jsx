import { styled } from "styled-components";
import LoginContainer from "./components/LoginContainer";
import Noticeboard from "./components/Noticeboard";
import Card from "./components/Card";
import Event from "./components/Event";

const App = () => {
  return (
    <Background>
      <MainContainer>
        <TopContainer>
          <img src="./images/logo_with_text.png" alt="logo with text" />
          <img
            src="./images/CUOnlineStudentConsole.png"
            alt="cuonline student console"
          />
        </TopContainer>
        <HeroContainer>
          <div className="noticeboardAndLogin">
            <Noticeboard />
            <LoginContainer />
          </div>

          <div className="latestAndEvents">
            <Heading isSpecial={true}>Latest</Heading>
            <Heading>Events</Heading>
          </div>

          <div className="cardAndTraining">
            <div className="cards">
              <Card
                title={"CPR Guide"}
                text={"How to do CPR on an Adult over 12 years age."}
                path={"./images/youtube1.png"}
              />
              <Card
                title={"COMSATS"}
                text={"COMSATS University Islamabad Introduction."}
                path={"./images/youtube2.png"}
              />
              <Card
                title={"News"}
                text={"Eagle Eye With Moazam Shahbaz, 20 Oct 2019 (Din News)"}
                path={"./images/youtube3.png"}
              />
            </div>

            <div className="events">
              <Event
                h2Text={"22 July"}
                p1={"22-32 July,2019"}
                h4={"COMSATS Summer Workshops Art, Design & Architecture"}
              />

              <Event
                h2Text={"11 July"}
                p1={"11-12 July, 2019"}
                h4={
                  'Training Workshop on "PYTHON: Data Analysis and Visualization"'
                }
              />

              <Event
                h2Text={"22 July"}
                p1={"22-32 July,2019"}
                h4={
                  "Seminar: Interpreting Data and Improving Public Health Communication’"
                }
              />
            </div>
          </div>
        </HeroContainer>
      </MainContainer>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  background-image: url("./images/bg.jpg");
  background-size: cover;
`;

const MainContainer = styled.div`
  min-height: 100vh;

  margin: 0 auto;
  max-width: 1280px;
  background-image: url("./images/bg.jpg");
  background-size: cover;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  height: 120px;
`;

const HeroContainer = styled.div`
  display: flex;
  height: calc(140vh - 120px);
  flex-direction: column;

  .noticeboardAndLogin {
    display: flex;
    height: 350px;
  }

  .latestAndEvents {
    display: flex;
    width: 100%;
    gap: 20px;
  }

  .cardAndTraining {
    display: flex;
    gap: 90px;
  }

  .cards {
    display: flex;
    gap: 20px;
  }

  .events {
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 60%;
    overflow-y: auto;
  }
`;

const Heading = styled.p`
  margin-bottom: 10px;
  border-bottom: 2px solid white;
  padding-bottom: 10px;
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;

  width: ${(props) => (props.isSpecial ? "68%" : "30%")};
`;

export default App;

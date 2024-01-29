import styled from "styled-components";
import Button from "./Button";

const LoginContainer = () => {
  return (
    <LoginComponent>
      <div className="buttonsDiv">
        <Button color={"darkblue"} text={"By Roll No"} isSpecial={false} />
        <Button color={"cyan"} text={"By List"} isSpecial={false} />
      </div>

      <form action="">
        <input placeholder="____-___-___" />
        <input placeholder="" />
        <div className="captcha">
          <input type="checkbox" />
          <p>I am not a robot.</p>
          <img src="./images/RecaptchaLogo.svg" alt="recaptcha" />
        </div>
      </form>

      <div className="forgotAndLogin">
        <div className="forgot">
          <p>Forgot Password? Click here</p>
          <h4>For parent console</h4>
        </div>

        <Button color={"darkblue"} text={"Login"} isSpecial={true} />
      </div>
    </LoginComponent>
  );
};

const LoginComponent = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 5px;
  height: 94%;

  .buttonsDiv {
    border-bottom: 1px solid lightgray;
    margin-bottom: 15px;
  }

  input {
    width: 320px;
    height: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 5px 7.5px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
  }

  .captcha {
    display: flex;
    align-items: center;
    width: 250px;
    height: 70px;
    border: 1px solid lightgray;
    justify-content: space-evenly;
  }

  .captcha input {
    width: 20px;
    height: 20px;
  }

  .captcha img {
    width: 50px;
    height: 50px;
  }

  .forgotAndLogin {
    display: flex;
    justify-content: space-between;
    margin-left: 55px;
    margin-top: 10px;

    h4 {
      color: red;
      text-decoration: underline;
    }
  }
`;

export default LoginContainer;

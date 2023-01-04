import { GithubLoginButton } from "react-social-login-buttons";
import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";

export default function SignIn() {

  const { gitHubSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      const data = await gitHubSignIn();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <h1>SIGN IN</h1>
        <ButtonWrap>
          <GithubLoginButton onClick={handleSignIn}>
            <span>Sign in with GitHub</span>
          </GithubLoginButton>
        </ButtonWrap>
      </div>
    </>
  );
}

const ButtonWrap = styled.div`
  width: 300px;
`
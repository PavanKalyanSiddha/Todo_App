import { useState } from "react";
import history from "../history";
import { ButtonContainer, Container, Header, Input } from "./style";

const LoginPage = (props) => {
  // const { setLoginPage } = props;
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Header> Sign in to your account </Header>
      <Input
        placeholder="Email"
        type="email"
        value={mail}
        onChange={(evt) => setMail(evt.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <ButtonContainer
        onClick={() => {
          if (
            // mail &&
            // password
            mail === "default@email.com"
            && password === "Default@2022"
          ) {
            history.push("/dashboard")
            localStorage.setItem("accessToken", "default@email.com")
            window.location.reload()
          } else {
            history.push("/login")
            localStorage.setItem("accessToken", "")
          } 
        }}
      >
        LogIn
      </ButtonContainer>
    </Container>
  );
};

export default LoginPage;

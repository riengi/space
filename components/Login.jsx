// Login screen element
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  width: 100px;
  padding: 10px;
  transition-duration: 0.4s;
  background-color: lightgray;

  &:hover {
    background-color: darkmagenta;
    color: white;
  }
`;

export default function Login() {
  return (
    <Container>
      <Item>
        <div>Username</div>
        <input type="text" name="username" value="" />
      </Item>
      <Item>
        <div>Password</div>
        <input type="password" name="password" value="" />
      </Item>
      <Item>
        <Button>Login</Button>
      </Item>
    </Container>
  );
}

import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  background-color: darkmagenta;
  font-size: 24px;
  color: white;
  padding: 10px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;

  a:hover {
    color: white;
  }
  a {
    color: white;
  }
`;

const LogoArea = styled.span`
  flex-grow: 1;
`;

const LoginArea = styled.span`
  /* flex-grow:1; */
`;

const LoginButton = styled.span`
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  font-size: 12px;
  color: white;
  border-radius: 4px;
  transition-duration: 0.4s;
  background-color: darkmagenta;
  border: 1px white solid;

  &:hover {
    background-color: white;
    color: black;
    border: 1px white solid;
  }
`;

export default () => {
  return (
    <Header>
      <LogoArea>
        <Link href="/">Space</Link>
      </LogoArea>

      <LoginArea>
        <Link href="/login">
          <LoginButton href="/login">Login</LoginButton>
        </Link>
      </LoginArea>
    </Header>
  );
};

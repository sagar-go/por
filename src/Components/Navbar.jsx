import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "./Context";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 1s all ease-in-out;
  height: ${({ show }) => (show ? "10%" : "100vh")};
  transition: 1s all ease-in-out;
`;
const Ham = styled.div`
  color: black;
  height: 10vh;
  transition: 1s all ease-in-out;
`;

const Navbar = () => {
  const {
    bgcolor,
    toggle,
    color,
    theme,
    darkcolor,
    tablet,
    navcolor,
    sethide,
    changehide,
    mobile,
    hide,
  } = useContext(MyContext);
  const [show, setShow] = useState(true);

  const Menuitem = styled.div``;
  const showhide = () => {
    setShow(!show);
  };

  return (
    <>
      <Container show={show}>
        <Menuitem>HOME</Menuitem>
        <Menuitem>ASDASD</Menuitem>
        <Menuitem>AWWW</Menuitem>
        <Menuitem>WWWWWWWWW</Menuitem>
      </Container>
      <Ham onClick={showhide}> CLICK</Ham>
    </>
  );
};

export default Navbar;

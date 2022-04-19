import React, { useContext, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { BiSun } from "react-icons/bi";
import "../App.css";
import { BsMoonStarsFill } from "react-icons/bs";
import { mobile, tablet, MyContext } from "./Context";
import { Typewriter } from "react-simple-typewriter";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
body{
  scroll-behavior: smooth;
  background-color: ${({ bgcolor }) => bgcolor};
   @media only screen and (max-width:700px) {
    overflow-y: ${({ hide }) => (hide ? "hidden" : "visible")};
    scroll-behavior: smooth;
  }
}

html::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
 
}

html::-webkit-scrollbar {
  width: 16px;
  background-color: #F5F5F5;
  
}

html::-webkit-scrollbar-thumb {
  border-radius: 10px;
  width: 16px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: ${({ color }) => color};
}
`;

const Section1 = styled.div`
  background-color: ${({ bgcolor }) => bgcolor};
  height: 90vh;
  width: 100%;
  display: flex;
  transition: 1s all ease-in-out;
  overflow: hidden;
  @media only screen and (max-width: 700px) {
    position: relative;
    padding-top: 40%;
  }
`;

const Menu2 = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15%;
  gap: 7%;
  font-size: 1.3rem;
  width: 80%;
  font-family: "Poppins", sans-serif;
  transition: 1s all ease-in-out;
  height: 10vh;
  background: ${({ navcolor }) => navcolor};
  ${mobile({
    flexDirection: "column",
    top: "0",
    position: "absolute",
    zindex: "99",
    paddingLeft: "0%",
    marginTop: "10vh",
    color: `${({ color }) => color}`,

    gap: "12%",
    width: "100%",
    transition: "1s all ease-in-out",
    height: "92vh",
  })}

  @media only screen and (max-width: 700px) {
    transform: ${({ hide }) =>
      !hide ? "translateX(-100%)" : "translateX(0%)"};
    transition: 0.8s all ease-in-out;
  }
`;

const Navbar = styled(motion.div)`
  position: sticky;
  top: 0%;
  align-items: center;
  display: flex;
  justify-content: space-around;

  padding-right: 3%;
  background-color: ${({ navcolor }) => navcolor};
  z-index: 99;
  transition: 1s all ease-in-out;
  ${mobile({
    display: "flex",
    top: "0",
    paddingRight: "0",
    zIndex: "22",
    justifyContent: "space-between",
    transition: "1s all ease-in-out",
    paddingTop: "2%",
    height: "10vh",
  })}
`;

const Dark = styled(motion.div)`
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 999;
  ${mobile({ paddingLeft: "5%" })}
`;

const Left = styled(motion.div)`
  width: 50%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 8%;
  padding-left: 10%;
  ${mobile({
    height: "72vh",
    width: "100%",
    paddingLeft: "5%",
    justifyContent: "start",
    paddingRight: "5%",
  })}

  & h4 {
    display: none;
    ${mobile({
      fontSize: "3rem",
      marginRight: "-2rem",
      transform: "rotateZ(360deg)",
      display: "block",
      opacity: "0.2",
      marginLeft: "-0.5%",
      marginTop: "9%",
      letterSpacing: "10px",
      width: "100%",
      color: "#a8b2bb",
    })}
  }
`;
const Right = styled(motion.div)`
  width: 50%;
  height: 90vh;
  display: flex;
  justify-content: end;
  align-items: center;
  letter-spacing: 5px;
  ${mobile({ display: "none" })}
  & h2 {
    font-size: 5rem;
    transform: rotateZ(90deg);
    margin-right: -15%;
    opacity: 0.3;
    color: ${({ color }) => color};
    margin-top: 8%;
    font-family: "Allerta Stencil", sans-serif;
    ${tablet({ fontSize: "4rem", marginRight: "-5rem" })}
    ${mobile({ fontSize: "3rem", marginRight: "-2rem" })}
  }
`;

const Text = styled(motion.div)`
  height: 26vh;
  color: ${({ color }) => color};
  margin-bottom: 5%;
  width: 100%;
  font-family: "Alice", serif;

  ${mobile({
    height: "10vh",
    marginLeft: "0",
    marginTop: "20%",
    marginBottom: "1%",
  })}
  & h2 {
    font-size: 3rem;
    border-bottom: 3px solid ${({ darkcolor }) => darkcolor};
    padding-bottom: 3%;
    font-weight: 500;
    ${tablet({ fontSize: "2.5rem" })}
    ${mobile({ fontSize: "1.8rem" })}
  }
  & h3 {
    font-size: 3rem;
    padding-top: 3%;
    font-weight: 500;
    ${tablet({ fontSize: "2.5rem" })}
    ${mobile({ fontSize: "2rem" })}
  }
`;

const Li = styled(motion.li)`
  list-style: none;
  position: relative;
  cursor: pointer;
  color: ${({ color }) => color};
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 3px;
    width: 0%;
    background-color: ${({ darkcolor }) => darkcolor};
    transition: 500ms ease-in-out;
  }
  &:hover::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${({ darkcolor }) => darkcolor};
    color: ${({ color }) => color};
  }
  & a {
    color: ${({ color }) => color};
  }
`;

const Span = styled(motion.div)`
  height: 30vh;
  color: ${({ color }) => color};
  /* margin-bottom: 10%; */
  width: 100%;
  font-family: "Alice", serif;
  font-size: 3.2rem;

  ${tablet({ fontSize: "2.5rem" })}
  ${mobile({ height: "10vh", fontSize: "1.7rem" })}
`;

const Ham = styled.div`
  display: none;
  ${mobile({ display: "block", paddingRight: "5%" })}
`;

export const Home = (props) => {
  const {
    bgcolor,
    color,
    theme,
    darkcolor,
    tablet,
    navcolor,
    sethide,
    changehide,
    toggle,
    hide,
    buttoncolor,
  } = useContext(MyContext);

  const variants = {
    opacity: 1,
    x: 0,
  };

  return (
    <>
      <GlobalStyle
        hide={hide}
        color={darkcolor}
        bgcolor={bgcolor}
      ></GlobalStyle>

      <Navbar hide={hide} navcolor={navcolor} color={color}>
        <Menu2 hide={hide} navcolor={navcolor} color={color}>
          <Li
            hide={hide}
            color={color}
            darkcolor={darkcolor}
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
              delay: 2,
            }}
          >
            <a href="#1" onClick={() => sethide(!hide)}>
              Home
            </a>
          </Li>
          <Li
            hide={hide}
            color={color}
            darkcolor={darkcolor}
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
              delay: 2.2,
            }}
          >
            <a href="#2" onClick={() => sethide(!hide)}>
              Projects
            </a>
          </Li>
          <Li
            hide={hide}
            color={color}
            darkcolor={darkcolor}
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
              delay: 2.4,
            }}
          >
            <a href="#3" onClick={() => sethide(!hide)}>
              About me
            </a>
          </Li>
          <Li
            hide={hide}
            color={color}
            darkcolor={darkcolor}
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 1,
              delay: 2.6,
            }}
          >
            <a href="#4" onClick={() => sethide(!hide)}>
              Contact
            </a>
          </Li>
        </Menu2>

        <Dark
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 1,
            delay: 2.8,
          }}
        >
          {theme ? (
            <BsMoonStarsFill
              onClick={toggle}
              fontSize={"25px"}
              style={{ cursor: "pointer", color: `${darkcolor}` }}
            />
          ) : (
            <BiSun
              onClick={toggle}
              fontSize={"30px"}
              style={{ cursor: "pointer", color: `${darkcolor}` }}
            ></BiSun>
          )}
        </Dark>
        <Ham onClick={changehide}>
          {!hide ? (
            <BiMenuAltLeft color={theme ? "white" : "black"} size={"35px"} />
          ) : (
            <BiMenuAltRight color={theme ? "white" : "black"} size={"35px"} />
          )}
        </Ham>
      </Navbar>

      <Section1 id="1" bgcolor={bgcolor}>
        <Left color={color}>
          <Span
            color={color}
            initial={{ opacity: 0, translateY: -100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span style={{ color: `${darkcolor}` }}> Let's&nbsp;</span>
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={[70]}
              deleteSpeed={[60]}
              words={["Create together", "Design together", "Develop together"]}
            />
          </Span>

          <motion.h4
            color={color}
            initial={{ opacity: 0, transform: "scale(2.5)" }}
            animate={{ opacity: 0.2, transform: "scale(1)" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {" "}
            PORTFOLIO
          </motion.h4>

          <Text color={color} darkcolor={darkcolor}>
            <motion.h2
              initial={{ opacity: 0, translateX: -200 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              Front-End Developer
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, translateY: 100 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Sagar Kumar
            </motion.h3>
          </Text>
        </Left>
        <Right
          color={color}
          initial={{ transform: "scale(0.1)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <h2>PORTFOLIO</h2>
        </Right>
      </Section1>
    </>
  );
};

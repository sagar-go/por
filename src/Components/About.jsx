import React, { useContext, useState } from "react";
import { MyContext } from "./Context";
import styled from "styled-components";
import { mobile, tablet } from "./Context";

const Section = styled.div`
  width: 100%;
  background-color: ${({ bgcolor }) => bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 1s all ease-in-out;
  padding-bottom: 10%;
  position: relative;
  ${mobile({ paddingBottom: "30%" })}
`;
const H2 = styled.h2`
  position: absolute;
  top: -15%;
  text-align: center;
  padding-top: 4.2%;
  font-size: 2.5rem;
  font-family: "Poppins", serif;
  font-weight: 500;
  color: ${({ color }) => color};
  background-color: ${({ bgcolor }) => bgcolor};
  align-items: center;
  transition: 1s all ease-in-out;
  ${mobile({ paddingTop: "5%" })}
`;

const Container = styled.div`
  height: 65vh;
  width: 80%;
  background-color: ${({ cardcolor }) => cardcolor};

  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  line-height: 30px;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 5%;
  transition: 1s all ease-in-out;
  box-shadow: 0px 5px 20px -7px ${({ bgcolor2 }) => bgcolor2};

  ${mobile({ width: "100%" })}

  & h3 {
    color: ${({ color }) => color};
    transition: 1s all ease-in-out;
    width: 50%;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 40px;
    /* box-shadow: 0px 5px 20px -7px ${({ bgcolor }) => bgcolor}; */
    ${mobile({
      width: "90%",
      padding: "2%",
      fontSize: "1rem",
      lineHeight: "25px",
    })}
  }
`;

const Mini = styled.div`
  height: 10vh;
  width: 60%;
  display: flex;
  justify-content: space-around;
  transition: 1s all ease-in-out;
  & img {
    height: 100%;
    ${mobile({ height: "80%" })}
  }
`;

function About() {
  const {
    bgcolor,
    toggle,
    color,
    theme,
    darkcolor,
    tablet,
    buttoncolor,
    mobile,
    cardcolor,
  } = useContext(MyContext);

  return (
    <>
      <Section bgcolor={bgcolor} color={color}>
        <H2 id="3" bgcolor={bgcolor} color={color}>
          ABOUT ME
        </H2>
        <Container bgcolor={bgcolor} color={color} cardcolor={cardcolor}>
          <h3>
            Hello ! My name is Sagar Kumar. I am a self taught Web Developer. I
            love creating fascinating stuff and making both static and
            functional websites. <br /> <br /> I am comfortable in using
            following technologies :{" "}
          </h3>
          <Mini bgcolor={bgcolor} color={color}>
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/html5.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/css3.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/javascript.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/react.svg"
              alt=""
            />
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/skill/bootstrap.svg"
              alt=""
            />
          </Mini>
        </Container>
      </Section>
    </>
  );
}

export default About;

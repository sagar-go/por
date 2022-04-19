import React, { useContext, useState } from "react";
import styled from "styled-components";
import { MyContext } from "./Context";
import cart from "../Images/cart.png";
import meal from "../Images/meal.png";
import movie from "../Images/movie.png";
import ed from "../Images/Ed.png";
import { mobile, tablet } from "./Context";

const Section = styled.div`
  width: 100%;
  background-color: ${({ bgcolor }) => bgcolor};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 15%;
  padding-top: 5%;
  transition: 1s all ease-in-out;
  ${mobile({ paddingBottom: "30%" })}
`;
const H2 = styled.h2`
  text-align: center;
  padding-top: 3%;
  font-size: 2.5rem;
  font-family: "Poppins", serif;
  font-weight: 500;
  color: ${({ color }) => color};
  transition: 1s all ease-in-out;
  /* background-color: ${({ bgcolor }) => bgcolor};      */

  /* border-bottom:2px solid #807AE8; */
  position: relative;
  align-items: center;
  ${mobile({ paddingTop: "20%", paddingBottom: "5%" })}
`;
const Container = styled.div`
  /* height:70vh; */
  width: 80%;
  margin-top: 5%;
  background-color: ${({ cardcolor }) => cardcolor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 3% 2% 3% 2%;

  border-radius: 10px;
  box-shadow: 0px 5px 20px -7px ${({ bgcolor }) => bgcolor};
  transition: 1s all ease-in-out;

  ${mobile({
    flexDirection: "column",
    padding: " 0 10px 10px 10px",
    flex: "1",
  })}
  & img {
    height: 100%;
    width: 50%;
    object-fit: cover;
    border-radius: 3px;
    background-position: left;
    ${mobile({ height: "30vh", width: "100%", objectFit: "contain" })}
  }
`;

const Text = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  transition: 1s all ease-in-out;
  ${mobile({ height: "30vh", width: "100%", flex: "1" })}
  & p {
    color: ${({ color }) => color};
    text-align: center;
    padding: 5% 5%;
  }

  & h2 {
    color: ${({ color }) => color};
    text-align: center;
  }

  & a {
    width: 33%;
    padding: 2%;
    cursor: pointer;
    text-align: center;
    color: ${({ color }) => color};
    border: 1px solid ${({ buttoncolor }) => buttoncolor};
    background-color: ${({ bgcolor }) => bgcolor};
    transition: 500ms ease-in-out;
    ${mobile({ width: "50%" })}
  }

  & a:hover {
    box-shadow: inset 200px 0 0 0 ${({ buttoncolor }) => buttoncolor};
  }
`;

function Projects() {
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
      <Section id="2" bgcolor={bgcolor} color={color}>
        <H2 bgcolor={bgcolor} color={color}>
          PROJECTS
        </H2>
        <Container cardcolor={cardcolor} color={color}>
          <img src={movie} alt="" />
          <Text bgcolor={bgcolor} color={color} buttoncolor={buttoncolor}>
            <h2>Movie App</h2>
            <p>Simple movie app with Api integration and Local Storage</p>
            <p>Tech Stack : HTML, CSS, React</p>
            <a
              href="https://sagar-go.github.io/Final_Movie/"
              target="_blank"
              buttoncolor={buttoncolor}
            >
              View Project
            </a>
          </Text>
        </Container>
        <Container cardcolor={cardcolor} color={color}>
          <img src={meal} alt="" />
          <Text bgcolor={bgcolor} color={color} buttoncolor={buttoncolor}>
            <h2>Meal App</h2>
            <p>
              Made a simple app like Zomato with 3 different Api's with
              funcationality of cart
            </p>
            <p>Tech Stack : HTML, CSS, React</p>
            <a
              href="https://sagar-go.github.io/meal/"
              target="_blank"
              buttoncolor={buttoncolor}
            >
              View Project
            </a>
          </Text>
        </Container>
        <Container cardcolor={cardcolor} color={color}>
          <img src={cart} alt="" />
          <Text bgcolor={bgcolor} color={color} buttoncolor={buttoncolor}>
            <h2>Shopping Cart</h2>
            <p>
              Simple shopping cart with filters, cart funcationality and
              Authentication using Local Storage. User can only make purchase if
              he is logged in.
            </p>
            <p>Tech Stack : HTML, CSS, React</p>
            <a
              href="https://sagar-go.github.io/cart/"
              target="_blank"
              buttoncolor={buttoncolor}
            >
              View Project
            </a>
          </Text>
        </Container>

        <Container cardcolor={cardcolor} color={color}>
          <img src={ed} alt="" />
          <Text bgcolor={bgcolor} color={color} buttoncolor={buttoncolor}>
            <h2>Ed-Tech Website</h2>
            <p>
              Implemented Firebase Authentication for a simple Ed-tech website
              and Framer Motion
            </p>
            <p>Tech Stack : HTML, CSS, React, Firebase</p>
            <a
              href="https://sagar-go.github.io/Assignment/"
              target="_blank"
              buttoncolor={buttoncolor}
            >
              View Project
            </a>
          </Text>
        </Container>
      </Section>
    </>
  );
}

export default Projects;

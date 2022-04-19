import React, { createContext, useState, useEffect } from "react";
import { css, ThemeProvider } from "styled-components";
import App from "../App";

export const mobile = (children) => {
  return css`
    @media only screen and (max-width: 700px) {
      ${children}
    }
  `;
};

export const tablet = (children) => {
  return css`
    @media only screen and (max-width: 1100px) {
      ${children}
    }
  `;
};
export const MyContext = createContext();
function Context({ children }) {
  const [theme, settheme] = useState(true);
  const [hide, sethide] = useState(false);

  const changehide = () => {
    sethide(!hide);
  };

  const light = {
    bgcolor: "ghostwhite",
    text: "black",
    dark: "orange",
    card: "ghostwhite",
    button: "orange",
    footercolor: "#7858fd",
    navcolor: "ghostwhite",
  };

  const dark = {
    bgcolor: "#121212",
    text: "#a8b2bb",
    dark: "#faf600eb ",
    card: "#1a1a1b",
    button: "#807AE8",
    footercolor: "black",
    navcolor: "#121212",
  };

  const themes = {
    false: light,
    true: dark,
  };

  const bgcolor = themes[theme].bgcolor;
  const color = themes[theme].text;
  const darkcolor = themes[theme].dark;
  const cardcolor = themes[theme].card;
  const buttoncolor = themes[theme].button;
  const footercolor = themes[theme].footercolor;
  const navcolor = themes[theme].navcolor;

  const toggle = () => {
    settheme(!theme);
  };

  useEffect(() => {
    let theme2 = localStorage.getItem("Theme");
    if (theme) {
      settheme(JSON.parse(theme2));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <MyContext.Provider
      value={{
        navcolor,
        light,
        dark,
        toggle,
        themes,
        theme,
        bgcolor,
        color,
        darkcolor,
        tablet,
        buttoncolor,
        footercolor,
        cardcolor,
        hide,
        sethide,
        changehide,
      }}
    >
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </MyContext.Provider>
  );
}

export default Context;

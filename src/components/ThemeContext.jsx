import { useState } from "react";
import Theme from "../context/Theme";
import { ThemeProvider } from "styled-components";

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("default");
  const themes = {
    default: {
      colors: {
        bgColor: "#10141E",
        primaryColor: "#161D2F",
        fontColor: "#FFFFFF",
        underlineColor: "#5A698F",
        buttonColor: "#FC4747",
        hoverColor: "",
      },
    },
  };

  return (
    <Theme.Provider value={theme}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </Theme.Provider>
  );
}

export default ThemeContext;

import { useState } from "react";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";

export const Theme = createContext();

export function ThemeContext({ children }) {
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

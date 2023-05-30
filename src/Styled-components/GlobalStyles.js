import { createGlobalStyle } from "styled-components";

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

export const paddingRight = "30px";
export const marginRight = "24px";

export const media = {
  desktop_m: customMediaQuery(1200),
  tablet: customMediaQuery(1000),
  tablet_s: customMediaQuery(800),
  phone: customMediaQuery(650),
};

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.fontColor};
    font-family: "Outfit";
}

 html {
  overflow-y: scroll
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px; 
  cursor: pointer;
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.buttonColor};
  border-radius: 4px; 
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
} 
`;

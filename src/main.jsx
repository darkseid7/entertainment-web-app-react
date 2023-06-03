import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.jsx";
import { AuthProvider } from "./context/Auth";
import { ThemeContext } from "./context/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeContext>
        <RouterProvider router={router} />
      </ThemeContext>
    </AuthProvider>
  </React.StrictMode>
);

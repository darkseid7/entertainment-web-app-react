import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { AnimatePresence } from "framer-motion";
import "./index.css";

import { router } from "./router/routes.jsx";
import { AuthProvider } from "./context/Auth";
import { ThemeContext } from "./context/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeContext>
        <AnimatePresence mode="wait">
          <RouterProvider router={router} />
        </AnimatePresence>
      </ThemeContext>
    </AuthProvider>
  </React.StrictMode>
);

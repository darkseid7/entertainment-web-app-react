import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/Login";
import SingUP from "../pages/SignUp/SingUP";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Results from "../pages/Results/Results";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import Bookmarked from "../pages/Bookmarked/Bookmarked";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },

      {
        path: "/:title",
        element: <Results />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/bookmarked",
        element: <Bookmarked />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
  {
    index: true,
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SingUP />,
  },
]);

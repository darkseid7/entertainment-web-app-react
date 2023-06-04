import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import { GlobalStyles } from "../Styled-components/GlobalStyles";
import { MainContainerApp } from "../Styled-components/MainContainerApp";
import { useAuth } from "../context/Auth";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

import { LayoutContainer } from "./styled-components/LayoutContainer";

function Layout() {
  const { loading } = useFetch();
  // console.log(user);

  if (loading)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      <GlobalStyles />
      <MainContainerApp exit={{ opacity: 0, y: -100 }}>
        <Header />
        <LayoutContainer>
          <SearchInput />
          <Outlet />
        </LayoutContainer>
      </MainContainerApp>
    </>
  );
}

export default Layout;

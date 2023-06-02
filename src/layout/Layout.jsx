import { Outlet } from "react-router-dom";

import { GlobalStyles } from "../Styled-components/GlobalStyles";
import { MainContainerApp } from "../Styled-components/MainContainerApp";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

import { LayoutContainer } from "./styled-components/LayoutContainer";

function Layout() {
  const { loading } = useFetch();
  debugger;
  if (loading)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      <GlobalStyles />
      <MainContainerApp>
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

import { Outlet } from "react-router-dom";

import { GlobalStyles } from "../Styled-components/GlobalStyles";
import { MainContainerApp } from "../Styled-components/MainContainerApp";

import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import useFetch from "../hooks/useFetch";

import { LayoutContainer } from "./styled-components/LayoutContainer";

function Layout() {
  const { loading } = useFetch();

  if (loading) return <h1>loading</h1>;

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

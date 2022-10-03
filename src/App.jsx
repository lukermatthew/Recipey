import React from "react";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { BrowserRouter as Router } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Nav>
          <GiKnifeFork />
          <Logo to="/">Recipey </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
};

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/myLog.png';
import "../Header.css";

const Header = () => {
  return (
    <Container className="con">
      <NavLink className="logo" to="/" exact="true">
        <img src={Logo} alt="logo" />
      </NavLink>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000000;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  z-index: 9000000000;
`;

const Responsive = styled.span`
  @media (max-width: 857px) {
    display: none;
  }
`;

import React from "react";
import { styled } from "@mui/material/styles";
import { NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Onav=styled("div")(({ theme }) => ({
  borderBottom: "1px solid black",
  margin: "0",
}));
const NavbarContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 20px",
  marginBottom: "20px",
}));

const Title = styled("h1")(({ theme }) => ({
  margin: 0,
  fontSize: "35px",
  color: "black",
  marginLeft: "-20px",
}));

const NavLinks = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyle: "none",
  gap: "20px",
  margin: 0,
  padding: 0,
  marginBottom: "5px",
}));

const NavLinkItem = styled(Link)(({ theme }) => ({
  color: "black",
  textDecoration: "none",
  padding: "5px 0",
  borderBottom: "2px solid transparent",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    borderBottom: "3px solid black",
  },
}));

const ActionButtons = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  marginleft:"20%",
}));

const NavBari = () => {
  return (
    <Onav>
        <NavbarContainer>
      <Title>Audience</Title>
      <ActionButtons>
        <Button
          variant="outlined"
          style={{ color: "black", borderColor: "black" }}
        >
          Info
        </Button>
        <Button
          variant="outlined"
          style={{ color: "black", borderColor: "black" }}
        >
          New
        </Button>
      </ActionButtons>
    </NavbarContainer>
      <NavLinks>
        <li>
          <NavLinkItem to="/audience">Saved</NavLinkItem>
        </li>
        <li>
          <NavLinkItem to="/audience/curated">Curated</NavLinkItem>
        </li>
        <li>
          <NavLinkItem to="/audience/trending">Trending</NavLinkItem>
        </li>
      </NavLinks>
    </Onav>
  );
};

export default NavBari;

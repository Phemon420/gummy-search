import React from "react";
import { styled } from "@mui/material/styles";
import { NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Onav=styled("div")(({ theme }) => ({
  borderBottom: "1px solid white",
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
  color: "white",
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
  color: "white",
  textDecoration: "none",
  padding: "5px 0",
  borderBottom: "2px solid transparent",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    borderBottom: "3px solid white",
  },
}));

const ActionButtons = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  marginleft:"20%",
}));

const NavBari1 = () => {
  return (
    <Onav>
        <NavbarContainer>
      <Title>Advanced Search</Title>
      <ActionButtons>
        <Button
          variant="outlined"
          style={{ color: "white", borderColor: "white" }}
        >
          Info
        </Button>
      </ActionButtons>
    </NavbarContainer>
    </Onav>
  );
};

export default NavBari1;

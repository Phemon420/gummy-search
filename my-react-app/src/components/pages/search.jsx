import React, { useState, useEffect } from "react";
import { colors } from "@mui/material";
import NavBari1 from "../common/navbar1";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const StyledText = styled("p")({
      fontSize: '16px', // Set the font size
      color: '#582474', // Set the text color
      marginLeft: '5px', // Set the left margin
  });

const Kgf = styled("div")({
      display: 'flex', // Set the display property to flex
      flexDirection: 'column', // Set the flex direction to column
      marginTop: '20px',
      });

const Fcuk = styled("div")({
        position: 'relative',
    });

    const Fcuk2 = styled("div")({
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
    });

    const StyledButton = styled("button")(({ theme }) => ({
        width: "375px",
        textAlign: "left",
        position: "relative",
        color: "white", // Light gray text
        backgroundColor: "#9c9b99", // White background
        border: "1px solid transparent", // Transparent border initially
        padding: "16px 48px", // Adjust padding to create space for icons
        fontSize: "14px",
        borderRadius: "4px", // Rounded corners
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        "&:hover": {
          color: "#ffffff", // White text on hover
          borderColor: "black", // White border on hover
        },
        "&:focus": {
          outline: "none",
          borderColor: "black", // White border when focused
        },
      }));
      
      
      const IconWrapper = styled("div")({
        position: "absolute",
        display: "flex",
        alignItems: "center",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none", // Prevent interactions with the icon
        svg: {
          height: "20px",
          width: "20px", // Ensure consistent size
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
        },
      });
      
      
      const LeftIconWrapper = styled(IconWrapper)({
        left: "16px", // Position left icon
      });
      
      const RightIconWrapper = styled(IconWrapper)({
        right: "16px", // Position right icon
      });

      
const StyledSearchBar = styled("div")({
    width: "380px", // Set width of the search bar container
    position: "relative",
    display: "flex",
    alignItems: "center",
    border: "1px solid transparent",
    borderRadius: "4px",
    backgroundColor: "#9c9b99",
    "&:focus-within": {
      borderColor: "black", // Highlight border on focus
    },
  });
  
  const StyledInput = styled("input")({
    width: "100%", // Fill the container
    padding: "16px 48px 16px 48px", // Padding for icons
    border: "none", // Remove default border
    borderRadius: "8px",
    backgroundColor: "transparent",
    fontSize: "14px",
    color: "white", // Light gray text
    outline: "none", // Remove focus outline
    "&::placeholder": {
      color: "white", // Placeholder text color
    },
  });
  
  const CustomButton = styled(Button)({
    marginTop: '38px',
    height: '48px',
    width: '40%',
    textAlign: 'left',
    color: 'white', // Set text color to white
    backgroundColor: '#582474', // Set background color to violet
    padding: '16px 20px',
    borderRadius: '4px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#f2b014', // Slightly darker violet on hover
    },
    '& .MuiButton-label': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

const Search=()=>{
    return(
        
        <Fcuk>
            <NavBari1/>
            <Fcuk2>
                <Kgf>
                    <StyledText>
                        Audience to search
                    </StyledText>
                    <StyledButton>
                        <LeftIconWrapper>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                            />
                            </svg>
                        </LeftIconWrapper>
                        <span>Anyone</span>
                        <RightIconWrapper>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                            />
                            </svg>
                        </RightIconWrapper>
                    </StyledButton>
                </Kgf>
                <Kgf>
                    <StyledText>
                        Keyword to look for
                    </StyledText>
                    <StyledSearchBar>
                        <LeftIconWrapper>
                            <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                            </svg>
                        </LeftIconWrapper>
                        <StyledInput type="text" placeholder="Any Keyword" />
                    </StyledSearchBar>
                </Kgf>
                <CustomButton>
                    <span style={{fontSize:11}}>Perform Advance Search</span>
                </CustomButton>
            </Fcuk2>
            <Box>
                <StyledText>
                    Search Tips
                </StyledText>

            </Box>
        </Fcuk>
    );
};

export default Search;
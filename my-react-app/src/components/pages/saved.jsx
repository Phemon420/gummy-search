import React from "react";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Kgf=styled("svg")`
    width: 3em;
    height: 3em;
    display: inline-block;
    `;
const Fcu=styled("div")`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Fcuk=styled("div")`
    padding: 1em;
    background-color:rgb(221, 221, 221);
    margin-bottom: 1em;
    border-radius: 50%;
`;
const Drdo=styled("h2")`

`;

const Drdo1=styled("p")`

`;

const Searchbar = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

const Kmno = styled("p")`
    margin-left: 65px;
    margin-bottom: 2px;
    font-size: 13px;
`;

const Emi = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Saved=()=>{
    return (
        <div>
            <Fcu>
                <Fcuk>
                    <Kgf class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z"></path></Kgf>
                </Fcuk>
                <Drdo>Create your first audience</Drdo>
                <Drdo1>An audience is a collection of subreddits you can search/analyze quickly</Drdo1>
            </Fcu>
            <Searchbar>
            <Kmno>Name your custom audience</Kmno>
            <Emi>
            <TextField
                variant="outlined"
                placeholder="Pick a short name, like Digital Marketing or Movie-Goers "
                size="small"
                style={{ width: "70%" }}
            />
            <Button
                variant="contained"
                style={{ marginLeft: "10px", backgroundColor: "#582474" }}
            >
                Find Communities
            </Button>
            </Emi>
            </Searchbar>
            <Kmno style={{marginTop:"30px"}}>No audience in mind? Explore a curated one, or browse trending subreddits.</Kmno>
        </div>
        
    );
};

export default Saved;
import React from "react";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Kgf=styled("svg")`
    width: 3em;
    height: 3em;
    display: inline-block;
    background-color: rgba(55, 65, 81);
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
    background-color:rgb(55 ,65, 81);
    margin-bottom: 1em;
    border-radius: .375rem;
`;
const Drdo=styled("h2")`
    color:white;
    opacity: .5;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 5px;
`;

const Drdo1=styled("p")`
    color:rgb(107 114 128);
    font-size: 12px;
    font-weight: 250;
    letter-spacing: .025em;
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
    color:rgb(156 163 175);
`;

const Emi = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Fudge = styled(TextField)`
    border: 1px solid #e5e7eb;
    border-radius: .375rem;
    background-color: rgb(31 41 55);
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
            <Fudge
                variant="outlined"
                placeholder="Pick a short name, like Digital Marketing or Movie-Goers "
                size="small"
                style={{ width: "70%" }}
                InputProps={{
                    style: {
                    color: "#fff", // Text color
                    },
                    inputProps: {
                    style: {
                        color: "#fff", // Text color
                        "::placeholder": { color: "rgb(255 255 255)" }, // Placeholder color
                    },
                    },
                }}
            />
            <Button
                variant="contained"
                style={{ marginLeft: "10px", backgroundColor: "rgb(8 145 178)" }}
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
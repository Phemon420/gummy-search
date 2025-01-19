import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Saved from "./saved";
import Curated from "./curated";
import Trending from "./trending";
import NavBari from "../common/navbar";
import { styled } from "@mui/material";

const Gfg=styled("div")`
`
const Audience = () => {
  return (
    <Gfg>
      <NavBari/>
        <Routes>
            <Route path="/" element={<Saved />} />
            <Route path="curated" element={<Curated />} />
            <Route path="trending" element={<Trending />} />
        </Routes>
    </Gfg>
  );
};

export default Audience;